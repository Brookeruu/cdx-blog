import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import { HashRouter } from 'react-router-dom';

import App from './App';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>,
  document.getElementById('app'),
);

module.hot.accept();
