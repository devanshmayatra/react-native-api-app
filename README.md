# React Native User Management App

A **React Native** application for managing user profiles. It allows viewing, navigating, and interacting with a list of users, displaying detailed information about each user.

## 📌 Features
- List of users displayed using **FlatList**
- View user details in a structured format
- Navigate between users
- Smooth UI with **TouchableHighlight** interactions

## 🛠️ Tech Stack
- **React Native** (Frontend)
- **TypeScript** (for type safety)
- **React Navigation** (for user navigation)
- **Metro Bundler** (React Native's build tool)

---

## 🚀 Getting Started
### 1️⃣ Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+ recommended)
- **npm** or **yarn**
- **React Native CLI** (`npm install -g react-native-cli`)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development - macOS only)

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/react-native-user-app.git
cd react-native-user-app
```

### 3️⃣ Install Dependencies
Using **npm**:
```sh
npm install
```
Using **yarn**:
```sh
yarn install
```

### 4️⃣ Running the App
#### 🚀 Start Metro Bundler
```sh
npm start  # Starts Metro Bundler
```

#### 📱 For Android:
```sh
npm run android  # Runs the app on an Android device/emulator
```
⚠️ **Ensure the emulator is running or a physical device is connected before running the project.**

#### 🍏 For iOS (Mac only):
```sh
cd ios && pod install && cd ..
npx react-native run-ios
```
⚠️ **Ensure the emulator is running or a physical device is connected before running the project.**

### 5️⃣ Debugging
- Use **React Native Debugger** for inspecting components and network calls.
- If issues arise, try clearing Metro's cache:
```sh
npx react-native start --reset-cache
```

## 📂 Project Structure
```
react-native-user-app/
│── src/
│   ├── components/       # Reusable UI components
│   ├── modules/          # App screens (All Users, User Profile)
│   ├── service/          # API & backend communication
│   ├── styles/           # Styling (global & component-specific)
│   ├── types/            # TypeScript interfaces and types
│   ├── utils/            # Utility functions and helpers
│── assets/               # Images and icons
│── App.tsx               # Main entry point
│── package.json          # Dependencies and scripts
```

## ❓ Troubleshooting
- If you face issues with `react-navigation`, try reinstalling dependencies:
```sh
npm install
cd ios && pod install && cd ..
```
- If Metro bundler crashes, restart it:
```sh
npx react-native start --reset-cache
```

## 📜 License
This project is licensed under the **MIT License**.

---

💡 **Need Help?** Feel free to raise an issue or contribute to the project! 🚀

