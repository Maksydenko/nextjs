/* eslint-disable import/no-cycle */

import DirectusCollection from '~/functions/api/directus/collection';
import seo from './seo';
// import blogPost from './blogPost';
import blogCategory from './blogCategory';

const blogPost = new DirectusCollection(
  'blog_post',
  [
    'id',
    [ 'category', blogCategory ],
    'slug',
  ],
  (obj) => ({
    ...obj,
    url: `${ obj.category.url }/${ obj.id }${ obj.slug ? `-${ obj.slug }` : '' }`,
  }),
);

const button = new DirectusCollection(
  'button',
  [
    'id',
    'theme',
    'text',
    'type',
    'raw_url',
    [ 'seo', seo ],
    [ 'blog_category', blogCategory ],
    [ 'blog_post', blogPost ],
  ],
  (obj) =>
  {
    let url = null;

    switch (obj.type)
    {
      case 'raw_url':
        url = obj.raw_url;
        break;
      case 'static_page':
        url = obj.seo.path;
        break;
      case 'blog_category':
        url = obj.blog_category.url;
        break;
      case 'blog_post':
        url = obj.blog_post.url;
        break;
    }

    return {
      id: obj.id,
      theme: obj.theme,
      text: obj.text,
      url,
    };
  },
);

export default button;
