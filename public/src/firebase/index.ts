import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

// TODO 環境変数にしまう
const firebaseConfig = {
  apiKey: "AIzaSyBKlUfzrdhVw52YHmMCu6ENh89o45s-RMk",
  authDomain: "ufo-society-1974.firebaseapp.com",
  databaseURL: "https://ufo-society-1974.firebaseio.com",
  projectId: "ufo-society-1974",
  storageBucket: "ufo-society-1974.appspot.com",
  messagingSenderId: "664562137202",
  appId: "1:664562137202:web:07b91922eb6a35f5696aeb",
  measurementId: "G-RR1G3PZJJL",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const FirebaseTimestamp = firebase.firestore.Timestamp;

// apiKey: process.env.REACT_APP_FIREBASE_KEY,
// authDomain: "ufo-society-1974.firebaseapp.com",
// databaseURL: "https://ufo-society-1974.firebaseio.com",
// projectId: "ufo-society-1974",
// storageBucket: "ufo-society-1974.appspot.com",
// messagingSenderId: "664562137202",
// appId: process.env.REACT_APP_FIREBASE_APP_ID,
// measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
