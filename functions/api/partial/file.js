import DirectusCollection from "~/functions/api/directus/collection";
import getBackendURI from "~/functions/getBackendURI";

const file = new DirectusCollection(
  'directus_files',
  [
    'id',
    'type',
    'width',
    'height',
  ],
  (obj) => ({
    ...obj,
    url: getBackendURI(`/assets/${ obj.id }`),
  }),
);

export default file;
