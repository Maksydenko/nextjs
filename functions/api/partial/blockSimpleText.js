import DirectusCollection from '~/functions/api/directus/collection';
import button from './button';

const blockText = new DirectusCollection(
  'block_simple_text',
  [
    'id',
    'content',
    [ 'buttons.button_id', button ],
  ],
  (obj) => ({
    ...obj,
    buttons: obj.buttons.map((el) => el.button_id),
  }),
);

export default blockText;
