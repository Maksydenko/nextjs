const getBackendURI = (path) => `${ process.env.NEXT_PUBLIC_API_INTERNAL_URI }
${ path }
${ path.indexOf('?') === -1 ? '?' : '&' }access_token=${ process.env.NEXT_PUBLIC_API_TOKEN }`;

export default getBackendURI;
