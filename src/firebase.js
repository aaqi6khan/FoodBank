import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAA3Pet9Ys1Bu4IqBLz-GKNj6i_c2VKIxw",
  authDomain: "foodbannk-d548b.firebaseapp.com",
  databaseURL: "https://foodbannk-d548b-default-rtdb.firebaseio.com",
  projectId: "foodbannk-d548b",
  storageBucket: "foodbannk-d548b.appspot.com",
  messagingSenderId: "81325553264",
  appId: "1:81325553264:web:a952422b07abbbde6de6b5",
  measurementId: "G-288S06DEME",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { database };