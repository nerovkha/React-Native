# Part 10 — React Native

Exercises for [Full Stack Open](https://fullstackopen.com) part 10
(CSM14111): the rate-repository-app — React Native with Expo, React
Navigation, forms, Apollo Client and authentication.

## Try the app

The app is published with EAS Update and uses the course's pre-deployed
Rate Repository API, so no local setup is needed. Open the Expo Go app
on your phone and scan the QR code for your platform with its QR
scanner (Projects → "Scan QR code"):

| Android | iOS |
| :-: | :-: |
| ![QR code for Android](./qrcode.png) | ![QR code for iOS](./qrcode-ios.png) |

Published update: [EAS dashboard](https://expo.dev/accounts/nerovkhas-team/projects/rate-repository-app/updates/5e92e137-495e-40bb-89c8-6a613592d3c1)

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
