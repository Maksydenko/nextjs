/* eslint-disable import/no-cycle */

import FieldsGroup from '~/functions/api/directus/fields-group';
import blockSimpleText from './blockSimpleText';
import blockTwoColumns from './blockTwoColumns';
import blockImageWithText from './blockImageWithText';
import blockVideo from './blockVideo';

const blocks = new FieldsGroup(
  [
    '*',
    [ `item:${ blockSimpleText.name }`, blockSimpleText ],
    [ `item:${ blockTwoColumns.name }`, blockTwoColumns ],
    [ `item:${ blockImageWithText.name }`, blockImageWithText ],
    [ `item:${ blockVideo.name }`, blockVideo ],
  ],
);

export default blocks;
