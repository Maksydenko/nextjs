import DirectusCollection from '~/functions/api/directus/collection';
import file from './file';

const blogCategory = new DirectusCollection(
  'blog_category',
  [
    'id',
    'status',
    [ 'cover', file ],
    'sort',
    'name',
    'slug',
    'meta_description',
    'meta_keywords',
  ],
  (obj) => ({
    ...obj,
    url: `/blog/${ obj.slug }`,
  }),
);

export default blogCategory;
