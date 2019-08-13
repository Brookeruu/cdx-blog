import React, { useState } from 'react';
import Blog from './components/Blog/Blog.jsx';
import Error from './Error.jsx'
import { FirebaseProvider } from './components/Firebase/FirebaseContext.jsx';
import GlobalHeader from './components/Global/GlobalHeader.jsx';
import Helmet from 'react-helmet';
import OAuth from './components/OAuth/OAuth.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import PropTypes from 'prop-types';
import { Switch, Route, withRoute } from 'react-router-dom';
import './App.css';

const App = () => {
  const [admin, setState] = useState(false);
  const setAdminLogIn = () => {
    setState(true);
  };
  const setAdminLogOut = () => {
    setState(false);
  };

  return (
    <FirebaseProvider value={{ admin, setAdminLogIn, setAdminLogOut }}>
      <Helmet>
        <title>Code Life</title>
        <meta name="description" content="blogs"/>
      </Helmet>
      <div className="body">
        <GlobalHeader />
        <Switch>
          <Route exact path='/' render={() => <Blog />} />
          <Route path='/admin' render={() => <OAuth />} />
          <Route path='/portfolio' render={() => <Portfolio />} />
          <Route path='/error404' render={() => <Error404 />} />
        </Switch>
      </div>
    </FirebaseProvider>
  );
};

export default App;
