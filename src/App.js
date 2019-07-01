import BlogList from './components/Blog/BlogList.jsx';
import firebase from './firebaseConfig';
import GlobalHeader from './components/Global/GlobalHeader.jsx';
import Helmet from 'react-helmet';
import OAuth from './components/OAuth/OAuth.jsx';
import PropTypes from 'prop-types';
import { Switch, Route, withRoute } from 'react-router-dom';
import React, { Component } from 'react';

import './App.css';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
      date: {}
    }
    this.handleSetUser = this.handleSetUser.bind(this);
  }

  handleSetUser(user){
    this.setState({ user: user })
  }

render(){
  // const firebase = firebase.database();
  // console.log("firebase",firebase)
  return(
  <React.Fragment>
    <Helmet>
        <title>Intern Life</title>
        <meta name="description" content="blogs" />
    </Helmet>
<div className="body">
    <GlobalHeader />
    <Switch>
      <Route exact path='/' render={() =>
         <BlogList /> 
         } />
      <Route path='/admin' render={() => <OAuth onSetUser={this.handleSetUser} />} />
      {/* <Route path='/error404' render={() => <Error404 />} /> */}
    </Switch>

  </div>
  </React.Fragment>
  );
}

}


export default App;