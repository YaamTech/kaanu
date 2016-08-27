# Get the bundle
curl "http://localhost:8081/index.android.bundle?platform=android" -o "index.android.bundle"
# Create assets folder if do not exist
mkdir -p android/app/src/main/assets

# Move the bundle under assets folders
mv -f index.android.bundle android/app/src/main/assets/

# Run react-native app
react-native run-android
