/* eslint-disable no-use-before-define */
/* eslint-disable no-continue */

const generatePathsFromArray = (arr) =>
{
  if (!arr.length)
  {
    return [];
  }

  const item = arr[0];
  const itemArray = [];
  const result = [];

  if (typeof item === 'string')
  {
    itemArray.push(item);
  }

  if (item instanceof FieldsGroup)
  {
    itemArray.push(...item.fields);
  }

  const nextItems = generatePathsFromArray(arr.slice(1));

  if (!nextItems.length)
  {
    return itemArray;
  }

  for (let i = 0; i < itemArray.length; i += 1)
  {
    for (let k = 0; k < nextItems.length; k += 1)
    {
      result.push(`${ itemArray[i] }.${ nextItems[k] }`);
    }
  }

  return result;
};

const compileFields = (arr) =>
{
  const result = [];

  for (let i = 0; i < arr.length; i += 1)
  {
    const item = arr[i];

    if (typeof item === 'string')
    {
      result.push(arr[i]);
      continue;
    }

    if (item instanceof FieldsGroup)
    {
      result.push(...item.fields);
      continue;
    }

    if (Array.isArray(item))
    {
      result.push(
        ...generatePathsFromArray(item),
      );
      continue;
    }

    throw new Error(`Invalid field type "${ typeof item }" in fields list"`);
  }

  return result;
};

class FieldsGroup
{
  #fields = [];

  constructor(fields)
  {
    this.#fields = fields;
  }

  get fields()
  {
    return compileFields(this.#fields);
  }

  get rawFields()
  {
    return this.#fields;
  }
}

export default FieldsGroup;
