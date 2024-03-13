import DirectusCollection from '~/functions/api/directus/collection';
import file from './file';

const blockVideo = new DirectusCollection(
  'block_video',
  [
    'id',
    'type',
    'youtube_url',
    [ 'cover', file ],
    [ 'video', file ],
  ],
  async (obj) =>
  {
    let videoId = null;
    let thumbnail = null;

    if (obj.type === 'youtube')
    {
      try
      {
        if (obj.youtube_url.indexOf('youtu.be') !== -1)
        {
          videoId = new URL(obj.youtube_url).pathname.substring(1);
        }
        else
        {
          videoId = new URL(obj.youtube_url).searchParams.get('v');
        }
      }
      catch (e)
      {
        // eslint-disable-next-line no-console
        console.log('[preprocessVideoBlock 1]', `URL parse error: ${ obj.youtube_url }`, e);
      }
      
      await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${ videoId }&key=${ process.env.GOOGLE_YOUTUBE_API_KEY }&part=snippet&fields=items/snippet/thumbnails`)
        .then(async (response) => (response.status === 200 && await response.json()) || null)
        .then((data) =>
        {
          const { thumbnails } = data.items[0].snippet;
          let maxWidth = 0;

          Object.values(thumbnails).forEach((el) =>
          {
            if (el.width > maxWidth)
            {
              maxWidth = el.width;
              thumbnail = el;
            }
          });
        })
        .catch((e) =>
        {
          // eslint-disable-next-line no-console
          console.log('[preprocessVideoBlock 2]', `videoId: ${ videoId }`, e);

          return null;
        });
    }

    return {
      ...obj,
      youtubeId: videoId,
      youtubeThumbnail: thumbnail,
    };
  },
);

export default blockVideo;
