import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCg2MHqesF052YmXTn6xeqLbVDrHQB5crI",
    authDomain: "items-db.firebaseapp.com",
    databaseURL: "https://items-db.firebaseio.com",
    projectId: "items-db",
    storageBucket: "items-db.appspot.com",
    messagingSenderId: "626118887221",
    appId: "1:626118887221:web:ec2973eb784e349debae7c",
    measurementId: "G-GW96MNLPF6"
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promp: 'select account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
