import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

// This is needed to ensure the Emotion cache isn't shared between requests.
export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}
