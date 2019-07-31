import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.firebase_apikey,
  authDomain: process.env.firebase_authDomain,
  databaseURL: "https://my-blog-677b8.firebaseio.com",
  projectId: process.env.firebase_projectId,
  storageBucket: process.env.firebase_storageBucket,
  messagingSenderId: process.env.irebase_messagingSenderId,
  appId: process.env.firebase_appId
};

firebase.initializeApp(firebaseConfig);
export default firebase;
