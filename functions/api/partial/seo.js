/* eslint-disable import/no-cycle */

import DirectusCollection from '~/functions/api/directus/collection';
import file from './file';

const seo = new DirectusCollection(
  'seo',
  [
    'path',
    [ 'head_image', file ],
    'meta_title',
    'meta_description',
    'meta_keywords',
  ],
);

export default seo;
