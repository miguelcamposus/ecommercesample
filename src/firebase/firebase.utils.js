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

  export const createUserProfileDocument = async(userAuth, additionaData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionaData
        })
      }catch(error){
        console.log('error creating user ', error.message);
      }
    }
    return userRef;

  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promp: 'select account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
