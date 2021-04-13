// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDYKOqquZNrReHdN74DPmOVwYfdEv9CAnU",
    authDomain: "wenchiblog-75895.firebaseapp.com",
    projectId: "wenchiblog-75895",
    storageBucket: "wenchiblog-75895.appspot.com",
    messagingSenderId: "218115986082",
    appId: "1:218115986082:web:445134ef49cdd48c5c3dfb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export { db }