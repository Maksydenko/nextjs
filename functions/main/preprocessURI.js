const preprocessURI = (url) =>
{
  if (!url)
  {
    return url;
  }

  if (!/^(https?:\/\/|\/|[a-z]+:|#)/.test(url))
  {
    return `https://${ url }`;
  }

  return url;
};

export default preprocessURI;
