Career Vault

Career Vault is a modern job application management web applicationbuilt with React and Firebase. It helps users organize job applications,save jobs to a wishlist, track interviews, manage their profile, viewanalytics, and securely access their data through Google Sign-In.

🚀 Live Demo

Website: https://career-vault.web.app

✨ Features

🔐 Google Authentication with Firebase

📊 Dashboard with application statistics

💼 Add, edit, delete, and track job applications

❤️ Wishlist with High / Medium / Low priority

📅 Interview calendar powered by application interview dates

📈 Application analytics

⚙️ Profile and appearance settings

📄 Word document data export

🗑️ Data management and delete-all functionality

☁️ Cloud Firestore for persistent user data

🛡️ User-specific Firestore security rules

🌐 Firebase Hosting deployment

🌙 Light and dark theme support

🛠️ Tech Stack

Frontend

React

Vite

Tailwind CSS

React Router

Lucide React

Backend / Cloud

Firebase Authentication

Google Sign-In

Cloud Firestore

Firebase Hosting

📁 Project Structure

Career_Vault/
├── public/
├── src/
│   ├── components/
│   │   ├── application/
│   │   ├── calendar/
│   │   ├── common/
│   │   ├── dashboard/
│   │   ├── navigation/
│   │   ├── settings/
│   │   └── wishlist/
│   ├── context/
│   │   ├── ApplicationContext.jsx
│   │   ├── AuthContext.jsx
│   │   ├── SettingsContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── WishlistContext.jsx
│   ├── data/
│   ├── firebase/
│   │   └── firebase.js
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .firebaserc
├── firebase.json
├── .gitignore
├── package.json
└── README.md

🔥 Firebase Architecture

User data is stored under the authenticated user's Firebase UID:

users
└── {userUid}
    ├── applications
    │   └── {applicationId}
    ├── wishlist
    │   └── {wishlistId}
    └── profile
        └── settings

Each user therefore has isolated application, wishlist, and profiledata.

🔐 Authentication

Career Vault uses Firebase Authentication with Google Sign-In. Theauthenticated user's UID is used to associate their data with theirFirestore records.

🛡️ Firestore Security

Firestore rules restrict users to their own data using the authenticateduser's UID:

request.auth != null
&& request.auth.uid == userId

This prevents one authenticated user from accessing another user'sCareer Vault data.

💻 Getting Started

1. Clone the repository

git clone <your-github-repository-url>
cd Career_Vault

2. Install dependencies

npm install

3. Configure Firebase

Create:

src/firebase/firebase.js

and add your Firebase Web SDK configuration.

Example:

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

Keep project-specific configuration out of Git if that is how yourproject is configured. Never put Firebase Admin SDK credentials orprivate service-account keys in frontend code.

4. Start the development server

npm run dev

🏗️ Production Build

npm run build

Preview the production build:

npm run preview

🌐 Firebase Hosting

The project uses the Vite dist directory for Firebase Hosting and isconfigured as a single-page application for React Router.

Build and deploy:

npm run build
firebase deploy

Live website:

https://career-vault.web.app

To open the deployed site from the project directory:

firebase open hosting:site

🔑 Firebase CLI

Install Firebase CLI:

npm install -g firebase-tools

Login:

firebase login

Initialize Hosting:

firebase init hosting

Recommended settings:

Public directory: dist
Single-page app: Yes
Automatic GitHub builds/deploys: No

📦 Useful Commands

Command                        Purpose

npm install                  Install dependenciesnpm run dev                  Start development servernpm run build                Create production buildnpm run preview              Preview production buildfirebase login               Login to Firebase CLIfirebase projects:list       List Firebase projectsfirebase use                 Show the linked Firebase projectfirebase deploy              Deploy the applicationfirebase open hosting:site   Open the live site

🔄 Data Flow

Google Login
     ↓
Firebase Authentication
     ↓
Authenticated User UID
     ↓
Cloud Firestore
     ├── Applications
     ├── Wishlist
     └── Profile
          ↓
      React Context
          ↓
      Application UI

The Calendar uses application data from ApplicationContext, sointerview dates stored with applications automatically appear in theCalendar.

🎨 Theme System

Career Vault supports light and dark themes through ThemeContext.

📄 Data Export

The Settings page can export Career Vault data as a Word document,including profile, applications, and wishlist information.

🧹 Data Management

The Settings page provides a delete-all-data function for removing theuser's Career Vault application and wishlist data from Firestore.

🚀 Future Improvements

Job search API integration

Interview reminders

Application deadline notifications

Resume upload and management

Job recommendations

Advanced analytics

Application status timeline

PWA/mobile support

Automated GitHub deployment

👨‍💻 Author

Yash Kumar

Career Vault is a React + Firebase project focused on practical jobapplication tracking and career management.

📄 License

This project is currently intended for educational and portfolio use.
