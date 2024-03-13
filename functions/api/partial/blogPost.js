/* eslint-disable import/no-cycle */

import DirectusCollection from '~/functions/api/directus/collection';
import FieldsGroup from '~/functions/api/directus/fields-group';
import blogCategory from './blogCategory';
import blocks from './blocks';
import file from './file';

const author = new FieldsGroup(
  [
    'id',
    'first_name',
    'last_name',
  ],
);

const blogPost = new DirectusCollection(
  'blog_post',
  [
    'id',
    'status',
    'date_publication',
    [ 'author', author ],
    [ 'category', blogCategory ],
    'title',
    'slug',
    // 'date_publication',
    [ 'cover', file ],
    'short_story',
    [ 'blocks', blocks ],
    'meta_description',
    'meta_keywords',
  ],
  (obj) => ({
    ...obj,
    url: `${ obj.category.url }/${ obj.id }${ obj.slug ? `-${ obj.slug }` : '' }`,
  }),
);

export default blogPost;
