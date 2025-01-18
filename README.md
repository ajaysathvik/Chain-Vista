## Get started

1. Install dependencies

```bash
yarn install
```

2. Get your thirdweb client id

Rename the `.env.example` file to `.env` and paste in your thirdweb client id.

You can obtain a free client id from the [thirdweb dashboard](https://thirdweb.com/dashboard/settings).

3. Prebuild the ios and android directories


> [!IMPORTANT]  
> The thirdweb SDK uses native modules, which means it cannot run on expo GO. You must build the ios and android apps to link the native modules.

```bash
npx expo prebuild
```

This will create the `ios` and `android` directories.

4. Start the app

```bash
yarn ios
```

or

```bash
yarn android
```

To run this app, you'll need either:

- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)

## Troubleshooting

### OpenSSL Error on Xcode 16

If using xcode 16, you may encounter a OpenSSL error when trying to build the app. This is because xcode 16 requires a newer version of OpenSSL than the one specified in the current app.json.

To fix this, change the version of OpenSSL specified in the `app.json` file to `3.3.2000`.

- Open the `app.json` file
- Find the `ios` > `extraPods` section
- Set `"version": "3.3.2000"` for the `OpenSSL-Universal` pod
- Save the file

Then run `npx expo prebuild` to update the native modules with the new OpenSSL version and run the app again.

## Additional Resources

- [Documentation](https://portal.thirdweb.com/typescript/v5)
- [Templates](https://thirdweb.com/templates)
- [YouTube](https://www.youtube.com/c/thirdweb)

## Support

For help or feedback, please [visit our support site](https://thirdweb.com/support)
