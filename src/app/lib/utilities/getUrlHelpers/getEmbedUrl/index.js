import isLive from '../../isLive';

const AV_ROUTE = 'ws/av-embeds';

const LIVE_CANONICAL_URL = 'https://www.bbc.com';
const LIVE_AMP_URL = 'https://polling.bbc.co.uk';
const TEST_CANONICAL_URL = 'https://www.test.bbc.com';
const TEST_AMP_URL = 'https://polling.test.bbc.co.uk';

const shouldOverrideMorphEnv = (queryString, type) => {
  if (isLive()) return false;

  const hasQueryString = Boolean(queryString);
  const isLiveRendererEnv =
    hasQueryString && queryString.includes('renderer_env=live');
  const isMediaType = type === 'media';

  if (isLiveRendererEnv) {
    return true;
  }

  return isMediaType;
};

const getBaseUrl = isAmp => {
  if (isAmp) {
    return isLive() ? LIVE_AMP_URL : TEST_AMP_URL;
  }
  return isLive() ? LIVE_CANONICAL_URL : TEST_CANONICAL_URL;
};

export default ({ type, mediaId, isAmp = false, queryString }) => {
  const morphEnvOverride = shouldOverrideMorphEnv(queryString, type)
    ? '?morph_env=live'
    : '';
  const ampSection = isAmp ? '/amp' : '';
  const baseUrl = getBaseUrl(isAmp);
  const url = `${baseUrl}/${AV_ROUTE}/${type}/${mediaId}`;

  return `${url}${ampSection}${morphEnvOverride}`;
};
