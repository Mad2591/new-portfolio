// src/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3lQzriG_hl5yk_06UO7UrBqhgGPUKHG4",
  authDomain: "test-6fad5.firebaseapp.com",
  databaseURL: "https://test-6fad5-default-rtdb.firebaseio.com",
  projectId: "test-6fad5",
  storageBucket: "test-6fad5.appspot.com",
  messagingSenderId: "693754467632",
  appId: "1:693754467632:web:58d931445f7cd738e6e4f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
