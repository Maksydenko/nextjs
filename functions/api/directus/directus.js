import { Directus } from '@directus/sdk';

const directus = new Directus(
  typeof window !== 'undefined'
    ? process.env.NEXT_PUBLIC_BACK_URI
    : process.env.NEXT_PUBLIC_API_INTERNAL_URI,

  {
    auth: {
      staticToken: process.env.NEXT_PUBLIC_API_TOKEN,
    },
  },
);

export default directus;
