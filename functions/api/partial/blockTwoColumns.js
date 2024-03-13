import DirectusCollection from '~/functions/api/directus/collection';

const blockTwoColumns = new DirectusCollection(
  'block_two_columns',
  [
    'id',
    'left',
    'right',
  ],
);

export default blockTwoColumns;
