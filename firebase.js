// firebase.js
// 1) Create a Firebase Web App in the Firebase console
// 2) Replace the values below with your Firebase SDK config
// 3) Enable Firestore in Firebase console (or use Realtime Database)

// Example config — REPLACE with your actual values:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
};

// Initialize Firebase (compat libs included in index.html)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
