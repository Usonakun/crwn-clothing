import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD3Gl905f3ko58okjtDiGs_95Z3C4BuXoI",
  authDomain: "crwn-db-9ddb3.firebaseapp.com",
  databaseURL: "https://crwn-db-9ddb3.firebaseio.com",
  projectId: "crwn-db-9ddb3",
  storageBucket: "crwn-db-9ddb3.appspot.com",
  messagingSenderId: "185397843997",
  appId: "1:185397843997:web:72779fabbcea5b05404ef4",
  measurementId: "G-EF0MCEEMJE"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShop = await userRef.get();
  if (!snapShop.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
