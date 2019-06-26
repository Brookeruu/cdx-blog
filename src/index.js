import * as firebase from "firebase/app";
import App from './App';
import firebaseConfig from './firebaseConfig';
import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter } from 'react-router-dom';

const title = 'Blogs on Blogs on Blogs on Blogs';

ReactDOM.render(
  <App title={title}/>,
  document.getElementById('app')
);

module.hot.accept();