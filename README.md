# Part 10 — React Native

Exercises for [Full Stack Open](https://fullstackopen.com) part 10
(CSM14111): the rate-repository-app — React Native with Expo, React
Navigation, forms, Apollo Client and authentication.

## Try the app

Scan the QR code with the Expo Go app to run the published version of
this app. It is published with EAS Update and uses the course's
pre-deployed Rate Repository API, so no local setup is needed.

![QR code](./qrcode.png)

Direct links: [iOS](https://u.expo.dev/update/01a1f4b2-1f62-71ef-b7e1-1387a753391b) ·
[Android](https://u.expo.dev/update/01a1f4b2-1f62-741a-adfb-2d13c5ffed9d)

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
