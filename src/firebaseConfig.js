// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNPx0O7FD8p3VuAQHMC0Jv9jqSIE2MSeM",
  authDomain: "paneetar-d7b78.firebaseapp.com",
  projectId: "paneetar-d7b78",
  storageBucket: "paneetar-d7b78.appspot.com",
  messagingSenderId: "985052930792",
  appId: "1:985052930792:web:47918f02819d61cd3e9f5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getDatabase(app);