import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDj9ljGxWIdqb9O9FgGs_iD76VOwLSPjK8",
  authDomain: "e-commarce-5865f.firebaseapp.com",
  databaseURL: "https://e-commarce-5865f-default-rtdb.firebaseio.com",
  projectId: "e-commarce-5865f",
  storageBucket: "e-commarce-5865f.appspot.com",
  messagingSenderId: "28667487193",
  appId: "1:28667487193:web:e0b1ec48780b56c0d2afc8",
  measurementId: "G-Z4LER74D4R",
};

export const createUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`),
        snapshot = await userRef.get()
  
  if (!snapshot.exists) {
    const {displayName, email} = userAuth,
          createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (e) {
      console.log(e.message)
    }
  }
  return userRef
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
