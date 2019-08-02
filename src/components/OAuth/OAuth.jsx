import React from 'react';
import firebase from '../../firebaseConfig';
import './index.css';

const gapi = window.gapi;

const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


export class OAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 'n/a',
      signedIn: false,
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ userId: user.uid });
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  handleSignIn() {
    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
  }

  handleSignOut() {
    firebase.auth().signOut().then(() => {
      this.setState({ userId: '', signedIn: false });
    });
  }

  onSetUser(user) {
    if ((user) === 'me') {
      return this.props.onSetUser;
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        {/* Authenication page under construction ... */}
      <div className="login">
        <p
          onClick={this.handleSignIn}
          className="text">Authenticate Admin</p>
      </div>

      </React.Fragment>
    );
  }
}

export default OAuth;
