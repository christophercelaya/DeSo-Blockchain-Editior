# Welcome to your Draftbit app!

This `README` is designed to help you get your Draftbit app running locally. Read
through the next few sections carefully, and if you encounter any issues please
do not hesitate to post in [Community](https://community.draftbit.com).

> Note that all of the commands in this document should be run using your
> computer's **command line**. If you're unsure of what this is, please read
> [this](https://tutorial.djangogirls.org/en/intro_to_command_line/) guide
> before moving on.

Remember, at any point you can go back to [build.draftbit.com](https://build.draftbit.com) and continue building your app
there!

## Requirements
- [Node.js LTS release](https://nodejs.org/en/). As of 07/21 this is 14.17+
- [Expo CLI](https://docs.expo.io/get-started/installation)
- [Git](https://git-scm.com/)
- [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall) for macOS users
- [Yarn](https://classic.yarnpkg.com/en/docs/install) use this over `npm install` when installing dependencies

> Only Node.js LTS releases (even-numbered) are recommended. As Node.js [officially states](https://nodejs.org/en/about/releases/), "Production applications should only use Active LTS or Maintenance LTS releases."

## Recommended Tools

- [VSCode Editor](https://code.visualstudio.com/download)
  - [VSCode Expo Extension](https://marketplace.visualstudio.com/items?itemName=byCedric.vscode-expo) for `app.json` debugging and autocomplete.
- Windows users: [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows), Bash via WSL, or the VSCode terminal.
- Expo Go for iOS and Android
  - 🤖  [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) - Android Lollipop (5) and greater.
  - 🍎  [iOS App Store](https://itunes.com/apps/exponent) - iOS 11 and greater.


## Installing Node.js

You can install Node by going to the [website directly](https://nodejs.org/en/) and clicking the side that says "Recommended For Most Users". This will guide you through the process. 

Once Node has been installed, run the following on the command line to make sure
it's been installed correctly:

```
$ node -v
```

If you see the current version of Node in response, you've successfully
installed Node on your machine.

For example,

```
$ node -v
v14.17.3
```

[Learn more about installing Nodejs](https://nodejs.dev/learn/how-to-install-nodejs)

> 😳 **Need help?** Try searching the [Community](https://community.draftbit.com) &mdash; which are a great resource for troubleshooting.

## Installing Expo CLI

You can install the Expo CLI using the following command. *This is the one spot where npm install is required!*

```
$ npm install -g expo-cli
```

Verify that the installation was successful by running `expo whoami`. You're not logged in yet, so you will see "Not logged in". You can create an account by running `expo register` if you like, or if you have one already run `expo login`, but you also don't need an account to get started.

[Learn more about Expo CLI here](https://docs.expo.io/get-started/installation/#installing-expo-cli)


## Install Project Dependencies

First, navigate to the project directory. The .zip will likely be in your
downloads folder, so extract the .zip and move it to the desired location
before proceeding.

Now, run the following commands to install the project dependencies (note that
you'll need an internet connection to do so).

```
$ cd Desktop/New-App
$ yarn
```

> The `cd` command above takes you into the project directory so you can install
> the correct dependencies. You should replace `Desktop/New-App` with the actual
> path to your unzipped project folder.

## Running

To start your project, simply run: `yarn start` inside of the project directory
(make sure you've [installed the dependencies
locally](#install-local-dependencies) first). This should open the Expo
developer tools in a browser tab.

### Running in an emulator

You can run your app on your mobile device, on the iOS simulator (if you have
a Mac), or on the Android emulator. If you'd prefer to run your app on an
emulator, see the installation instructions below.

- [iOS Simulator](https://docs.expo.io/workflow/ios-simulator/)
- [Android Studio](https://docs.expo.io/workflow/android-studio-emulator/)


### Running on your Android or iOS Device

The fastest way to get up and running is to use the Expo Go app on your iOS or Android device. Expo Go allows you to open up apps that are being served through Expo CLI.

- 🤖 [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) - Android Lollipop (5) and greater.
- 🍎 [iOS App Store](https://itunes.com/apps/exponent) - iOS 11 and greater.

## File Structure

```
.
    ├── assets                 # Static assets like images and fonts.
    ├── config                 # JS representation of fonts, images, themes, and more
        └── Themes.js          # Example file for your app's themes
    ├── screens                # React Native code for the screens you built.
    │   └── MyFirstScreen.js   # Example file for the screen named "My First Screen"
    ├── components.js          # All your custom components
    ├── .gitignore             # List of files to ignore when comitting with Git
    ├── App.js                 # Entry point for your app
    ├── app.json               # Configuration file for your app, used by Expo
    ├── AppNavigator.js        # Code for your app's navigators
    ├── package.json           # The metadata for your project, including dependencies
    └── README.md              # This file!
```

## Publishing your app to the App Store

Expo has really great documentation for how to get started. [Click here](https://docs.expo.io/distribution/building-standalone-apps/) to learn more.

## Troubleshooting

Any errors that may occur in the process of developing or testing your app will show up as a "Redbox" error on the testing device. A red box will be show on the device with the error message and stack trace for the error. The Expo documentation has [more information about Redbox errors](https://docs.expo.io/get-started/errors/#redbox-errors-and-stack-traces).

Compilation errors or errors occurring when the expo process tries to execute
commands will also show up in the browser. If you cannot fix these errors, you
should refer to Expo's documentation on [debugging
Javascript](https://docs.expo.io/workflow/debugging/).

## FAQ

- _How can I add my code to GitHub?_

  Pushing your code to GitHub is easy! Follow the information
  [guide](https://help.github.com/en/github/getting-started-with-github/create-a-repo)
  to create your repository and commit your project code.

- _How do I build a binary for the App and Play store?_

  Expo published an [excellent
  guide](https://docs.expo.io/versions/latest/distribution/app-stores/) for
  deploying to the Apple iTunes Store and the Google Play Store. Moreover, for
  users with an iOS Enterprise certifcate, [Expo has information about using
  the certificate to build your apps](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/#if-you-choose-to-build-for-ios).

- _What/where is the license for this code?_

  There's no license by default, but if you create a GitHub repository for your
  project code, for example, [adding a license is
  easy](https://help.github.com/en/github/building-a-strong-community/adding-a-license-to-a-repository).

- _Can I run Expo web with this?_

  Of course! See [this](https://docs.expo.io/versions/v37.0.0/bare/using-web/#__next) guide by Expo for running your React Native app in
  a web browser.

- _What libraries does this code depend on?_

  You can see the full list in your projects `package.json` file (under the
  `dependencies` section), but a few of our dependencies are `react-navigation`,
  `react-native-screens`, and `expo-av`.
