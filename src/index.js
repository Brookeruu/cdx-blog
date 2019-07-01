import * as firebase from "firebase/app";
import App from './App';
import firebaseConfig from './firebaseConfig';
import { HashRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>,
  document.getElementById('app')
);

module.hot.accept();