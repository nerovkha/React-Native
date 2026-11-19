import 'dotenv/config';

export default {
  name: 'rate-repository-app',
  slug: 'rate-repository-app',
  owner: 'nerovkhas-team',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  runtimeVersion: {
    policy: 'appVersion',
  },
  updates: {
    url: 'https://u.expo.dev/7a91984d-c344-4081-be35-fc142fbc1dd6',
  },
  extra: {
    env: 'development',
    apolloUri:
      process.env.EXPO_PUBLIC_APOLLO_URI ||
      process.env.APOLLO_URI ||
      'http://localhost:4000',
    eas: {
      projectId: '7a91984d-c344-4081-be35-fc142fbc1dd6',
    },
  },
};
