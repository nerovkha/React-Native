module.exports = {
  preset: 'jest-expo',
  // CI runners are slow enough that form tests can exceed the 5s default
  testTimeout: 20000,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native(-polyfill)?|expo(nent)?|@expo(nent)?/.*|@unimodules.*|unimodules|sentry-expo|native-base|@nozbe/watermelondb|@react-native-async-storage/async-storage|react-router-native|@react-native-picker)',
  ],
};
