import DirectusCollection from '~/functions/api/directus/collection';
import button from './button';
import file from './file';

const blockImageWithText = new DirectusCollection(
  'block_image_with_text',
  [
    'id',
    [ 'images.directus_files_id', file ],
    'content',
    [ 'buttons.button_id', button ],
    'rtl',
  ],
  (obj) =>
  ({
    ...obj,
    images: obj.images.map((el) => el.directus_files_id),
    buttons: obj.buttons.map((el) => el.button_id),
  })
);

export default blockImageWithText;
