// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCxhhZcXCgVOCOmx-D2rZsG4OV1NkiOzrU",
    authDomain: "adventure-ally.firebaseapp.com",
    projectId: "adventure-ally",
    storageBucket: "adventure-ally.appspot.com",
    messagingSenderId: "582714970084",
    appId: "1:582714970084:web:1dbd6800f81efabeb301f1"
  };

firebase.initializeApp(config);

// sets up basic authorization functionality + firestore db
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// sets up ability to log in with Google (via pop-up)
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;