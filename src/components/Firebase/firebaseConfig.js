import * as firebase from 'firebase';
// import * as admin from 'firebase-admin';
// import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL: 'https://my-blog-677b8.firebaseio.com',
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  clientId: process.env.FIREBASE_CLIENT_ID,
};

firebase.initializeApp(firebaseConfig);
export default firebase;
