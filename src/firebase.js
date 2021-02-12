// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAegPQGc8PnjtlIBLXQDuzj2QMg9msSuyk",
  authDomain: "react-burger-builder-2bd82.firebaseapp.com",
  databaseURL: "https://react-burger-builder-2bd82.firebaseio.com",
  projectId: "react-burger-builder-2bd82",
  storageBucket: "react-burger-builder-2bd82.appspot.com",
  messagingSenderId: "945308959767",
  appId: "1:945308959767:web:61fc8c74901c430accc852",
  measurementId: "G-EVT1NQB6HJ",
});

export const firebaseAuth = app.auth();
export const firebaseDB = app.database();
export default app;
