/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-use-before-define */
/* eslint-disable no-continue */
/* eslint-disable import/no-cycle */

/*

[Usage example]

1. Create collections description

const collection0 = new DirectusCollection( ... );
const collection1 = new DirectusCollection(
  'directus_collection1_name',
  [
    'fieldName1',
    'fieldName2',
    'fieldName3',
    [ 'fieldName4', collection0 ],
    'fieldNameN',
  ],
  postprocessor1,
  postprocessor2,
  async (obj, context) =>
  {
    // custom postprocessor logic
  },
  postprocessorN,
);

2. Use collection as an directus' ItemsService instance
2a. Don't forget to pass context. Context - object with any fields,
    that will be passed to every preprocessor as second argument.

await collection1
  .passContext({ foo: bar })
  .readByQuery({
    filter: {
      ... any filters
    }.
    limit: -1,
    offset: 0,
    fields: don't pass. Fields will be passed automatically, with all nested subfields
  });

3. Profit. Returned value will be postprocessed regardless of how collection was requested.
   Subcollections will be pospprocessed too.

*/

import get from 'lodash/get';
import set from 'lodash/set';
import directus from './directus';
import FieldsGroup from './fields-group';

const generatePostprocessingList = (fields) =>
{
  const list = [];

  for (let i = 0; i < fields.length; i += 1)
  {
    if (!Array.isArray(fields[i]))
    {
      continue;
    }

    const collection = fields[i].find((el) => el instanceof FieldsGroup);

    if (!collection)
    {
      continue;
    }

    const path = fields[i].filter((el) => typeof el === 'string').join('.');

    if (collection instanceof DirectusCollection)
    {
      list.push({
        path,
        collection,
      });
    }

    const subpaths = generatePostprocessingList(collection.rawFields);

    list.push(
      ...subpaths.map((el) => ({
        ...el,
        path: `${ path }.${ el.path }`,
      })),
    );
  }

  return list;
};

const findRealPaths = (object, parts, path = '') =>
{
  let part = parts[0];
  
  // Check for M2A
  if (part
      && part.indexOf(':') !== -1
      && !Array.isArray(object)
  )
  {
    const sub = part.split(':', 2);

    if (sub.length === 2
        && object.collection !== sub[1]
    )
    {
      return [];
    }

    part = sub[0];
  }

  if (!parts.length && !Array.isArray(object))
  {
    return typeof object === 'object' && object ? [ path ] : [];
  }

  const paths = [];

  if (Array.isArray(object))
  {
    for (const key in object)
    {
      if ({}.hasOwnProperty.call(object, key))
      {
        paths.push(
          ...findRealPaths(object[key], parts, `${ path }[${ key }]`),
        );
      }
    }
  }

  if (typeof object[part] === 'object'
      && object[part]
  )
  {
    paths.push(
      ...findRealPaths(object[part], parts.slice(1), `${ path ? `${ path }.` : '' }${ part }`),
    );
  }

  return paths;
};

const postprocessByPath = async (data, path, collection, context) =>
{
  let paths = findRealPaths(data, path === '' ? [] : path.split('.'), '');

  for (let i = 0; i < paths.length; i += 1)
  {
    if (paths[i] === '')
    {
      data = await collection.postprocess(
        data,
        context,
      );

      continue;
    }

    set(
      data,
      paths[i],
      await collection.postprocess(
        get(data, paths[i]),
        context,
      ),
    );

    // console.log('path', paths[i], data);
  }

  return data;
};

const postprocessResultData = (collection, fields, context) =>
{
  const postprocessingList = [
    ...generatePostprocessingList(fields),
  ];

  postprocessingList.sort((a, b) => b.path.split('.').length - a.path.split('.').length);

  // console.log('postprocessingList', postprocessingList.map((el) => el.path));

  return async (initialData) =>
  {
    let data = initialData;

    for (let i = 0; i < postprocessingList.length; i += 1)
    {
      data = await postprocessByPath(
        data,
        postprocessingList[i].path,
        postprocessingList[i].collection,
        context,
      );
    }

    data = await postprocessByPath(
      data,
      '',
      collection,
      context,
    );

    return data;
  };
};

class DirectusCollection extends FieldsGroup
{
  #context = {};

  #collection = null;

  #postprocessors = [];

  constructor(collection, fields, ...postprocessors)
  {
    super(fields);

    this.#collection = collection;
    this.#postprocessors = postprocessors;
  }

  get name()
  {
    return this.#collection;
  }

  passContext(context)
  {
    if (typeof context !== 'object')
    {
      throw new Error('Context should be an object');
    }

    this.#context = context;

    return this;
  }

  async postprocess(initialData, context = {})
  {
    if (typeof initialData === 'undefined')
    {
      return null;
    }
    
    let data = initialData;

    for (let i = 0; i < this.#postprocessors.length; i += 1)
    {
      if (typeof this.#postprocessors[i] !== 'function')
      {
        continue;
      }

      data = this.#postprocessors[i](data, context);
    }

    return data;
  }

  async readOne(key, q, options)
  {
    return directus
      .items(this.#collection)
      .readOne(key, { ...q, fields: this.fields }, options)
      .then(
        postprocessResultData(this, this.rawFields, this.#context),
      );
  }

  async readMany(q, options)
  {
    return directus
      .items(this.#collection)
      .readMany({ ...q, fields: this.fields }, options)
      .then((data) => data.data)
      .then(
        postprocessResultData(this, this.rawFields, this.#context),
      );
  }

  async readByQuery(q, options)
  {
    return directus
      .items(this.#collection)
      .readByQuery({ ...q, fields: this.fields }, options)
      .then((data) => data.data)
      .then(
        postprocessResultData(this, this.rawFields, this.#context),
      );
  }

  async createOne(item, query, options)
  {
    return directus
      .items(this.#collection)
      .createOne(item, query, options)
      .then(
        postprocessResultData(this, this.rawFields, this.#context),
      );
  }
}

export default DirectusCollection;
