import firebase from '../../firebaseConfig'; 
import React from 'react';
import './index.css';

const gapi = window.gapi;

const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


export class OAuth extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userId: 'n/a',
      signedIn: false
    }
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ userId: user.uid})
      }
      console.log("compDidMount something wrong")
    }) 
  }

  handleSignIn(){

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
    }).catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
    })
  }

  handleSignOut(){
    firebase.auth().signOut().then(() => {
      this.setState({ userId: '' , signedIn: false})
    })
  }

  onSetUser(user){
    if ((user) === "me") {
    return this.props.onSetUser
    }
    else {
      console.log("invalid login")
    }
  }

  render(){
    return(
      <React.Fragment>
        {/* Authenication page under construction ... */}
      <div className="login">
        <p 
          onClick={this.handleSignIn}
          className="text">Authenticate Admin</p>
      </div>

      </React.Fragment>
    )
  };
};

export default OAuth;