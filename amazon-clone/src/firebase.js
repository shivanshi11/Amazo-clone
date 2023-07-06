// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7TNRymk4eT3pjEVQeofGTOflfzmPC3oI",
  authDomain: "clone-ae185.firebaseapp.com",
  projectId: "clone-ae185",
  storageBucket: "clone-ae185.appspot.com",
  messagingSenderId: "629810940390",
  appId: "1:629810940390:web:0260e09aa0e97640c02e27",
  measurementId: "G-EJ52PPF4T4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };