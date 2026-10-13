# Explore Bharat AI — Android-ready project

This is the React + Vite project you shared, prepared for packaging as an Android app with Capacitor. It is not yet a signed APK; Android Studio must generate/build that on a computer with the Android SDK installed.

## Run the website locally
1. Install Node.js LTS from https://nodejs.org/
2. Open this folder in Terminal / PowerShell.
3. Run `npm install`
4. Run `npm run dev` and open the local URL Vite prints.

## Create the Android project
1. Install Android Studio from https://developer.android.com/studio and complete its SDK setup.
2. In this project folder, run:
   ```bash
   npm install
   npm run cap:add:android
   npm run cap:sync
   npm run cap:open:android
   ```
3. Android Studio opens the `android` project. Wait for Gradle sync to finish.
4. Connect an Android phone with USB debugging enabled, or create an emulator, then press **Run** to test.
5. To create an installable APK, in Android Studio choose **Build → Build Bundle(s) / APK(s) → Build APK(s)**. For a Play Store release, create a signed Android App Bundle (AAB).

## Important
- This project needs internet access for npm dependencies and Android Gradle downloads.
- Keep API keys and secrets out of frontend source code.
- Any sample destination prices/details should be verified before travellers rely on them.
- The current project is a starting app, not a live booking platform; real AI, live maps, weather, hotels, and bookings require service/API integrations.

## Alternative: build the APK in GitHub Actions (no Android Studio needed locally)
This project includes `.github/workflows/build-android-apk.yml`. To use it, upload the project folder to a GitHub repository, open the repository's **Actions** tab, choose **Build Explore Bharat AI Android APK**, and click **Run workflow**. When it completes, open that workflow run and download the `explore-bharat-ai-debug-apk` artifact. Extract it to get `app-debug.apk`, then transfer it to your Android phone and install it. GitHub may ask you to enable Actions. This creates a debug APK for testing, not a Play Store-signed release.
