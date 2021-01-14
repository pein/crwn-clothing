import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCwbgBXqHd1bj1JQH93mmpvgUHuIaD29qM",
  authDomain: "crwn-db-6082d.firebaseapp.com",
  projectId: "crwn-db-6082d",
  storageBucket: "crwn-db-6082d.appspot.com",
  messagingSenderId: "1037580531698",
  appId: "1:1037580531698:web:609f1c108ab9a06310dd6b",
  measurementId: "G-LQPPR6HKGL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
