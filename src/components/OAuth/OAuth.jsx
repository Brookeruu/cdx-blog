import React, { useState, useEffect, useContext } from 'react';
import firebase from '../Firebase/firebaseConfig.js';
import FirebaseContext from '../Firebase/FirebaseContext.jsx';
import Button from '../Button.jsx';
import Input from '../Input.jsx';
import './index.css';

const gapi = window.gapi;

const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const OAuth2 = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [invalidLogin, setInvalidLogin] = useState(false);
  const adminContext = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        setUserId(user.uid);
        setSignedIn(true);
        setEmail(user.email);
        setInvalidLogin(false);
        adminContext.setAdminLogIn();
      }
    });
    return console.log("unmounting...");
  }, []);

  const handleSignIn = () => {
    firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
      const user = result;
      setSignedIn(true);
      setUser(user);
      setInvalidLogin(false)
    }).catch((error) => {
      setInvalidLogin(true);
      console.log("invalid log in: ", errorCode, errorMessage)
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  };

  const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
      setUserId('');
      setSignedIn(false);
      adminContext.setAdminLogOut();
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSetUser = (user) => {
    if ((user.uid) === process.env.FIREBASE_USER_ID) {
      return props.onSetUser;
    }
  };

  const signInDisplay = (
    <div>
      <Input onChange={handleEmail} placeholder="email"></Input>
      <Input onChange={handlePassword} type="password" placeholder="password"></Input>
      <br/>
      <Button type="submit" onClick={handleSignIn}>Sign In</Button>
    </div>
  );

  const signOutDisplay = (
    <div>
      <p>Signed in as: {email}</p>
      <Button delete type="submit" onClick={handleSignOut}>Sign Out</Button>
    </div>
  );

  return (
    <div className="login">
      { invalidLogin ? <p style={{color: 'red'}}>Invalid Log In</p> : null }
      { signedIn ? signOutDisplay : signInDisplay }
    </div>
  );
};

export default OAuth2;
