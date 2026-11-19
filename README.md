# Part 10 — React Native

Exercises for [Full Stack Open](https://fullstackopen.com) part 10
(CSM14111): the rate-repository-app — React Native with Expo, React
Navigation, forms, Apollo Client and authentication.

## Run

```bash
npm install
npm start        # Expo dev tools; run on iOS/Android emulator or web
npm run ios      # or npm run android / npm run web
```

## Test

```bash
npm test         # jest-expo + react native testing library
npm run lint
```

## Test in CI

`.github/workflows/ci.yml` installs, lints and unit-tests the app on
every push and pull request. This directory is self-contained — copy
its contents into a new repository and CI works without any extra
setup.
