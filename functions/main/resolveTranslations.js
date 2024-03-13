/* eslint-disable guard-for-in */

const resolveTranslations = (obj, context) =>
{
  const result = { ...obj };
  const { locale, defaultLocale } = context;

  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj)
  {
    if (
      (
        key === 'translations'
        || /_translations$/.test(key)
      )
      && Array.isArray(obj[key])
    )
    {
      let newKey = key.replace(/_?translations$/, '');

      if (!newKey.length)
      {
        newKey = '_';
      }

      const translation = obj[key].find((el) => el.languages_code.split('-')[0] === locale);
      const fallbackTranslation = obj[key].find((el) => el.languages_code.split('-')[0] === defaultLocale);

      if (translation)
      {
        result[newKey] = translation;

        // eslint-disable-next-line no-restricted-syntax
        for (const k in obj[newKey])
        {
          if (fallbackTranslation && !obj[newKey][k])
          {
            result[newKey][k] = fallbackTranslation[k];
          }
        }
      }
      else if (fallbackTranslation)
      {
        result[newKey] = fallbackTranslation;
      }
      else
      {
        // eslint-disable-next-line prefer-destructuring
        result[newKey] = obj[key][0] || null;
      }
    }
    else if (typeof obj[key] === 'object')
    {
      // eslint-disable-next-line no-param-reassign
      result[key] = resolveTranslations(obj[key], context);
    }
  }

  return result;
};

export default resolveTranslations;
