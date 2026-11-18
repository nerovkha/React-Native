module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native(-polyfill)?|expo(nent)?|@expo(nent)?/.*|@unimodules.*|unimodules|sentry-expo|native-base|@nozbe/watermelondb|@react-native-async-storage/async-storage|react-router-native|@react-native-picker)',
  ],
};
