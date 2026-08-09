// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkonlQSiUrNcCeO04Td7eAXR2Fxkqryfw",
  authDomain: "carrer-vault.firebaseapp.com",
  projectId: "carrer-vault",
  storageBucket: "carrer-vault.firebasestorage.app",
  messagingSenderId: "42609085823",
  appId: "1:42609085823:web:ac2416bc54911b93779e4a",
  measurementId: "G-7YTB399VH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;