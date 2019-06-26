import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Switch, Route, withRoute } from 'react-router-dom';
import GlobalHeader from './components/Global/GlobalHeader.jsx';
import BlogList from './components/Blog/BlogList.jsx';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      author: "brooke",
      date: {}
    }
  }
render(){
  return(
  <React.Fragment>
    <Helmet>
        <title>Intern Life</title>
        <meta name="description" content="blogs" />
    </Helmet>
    <GlobalHeader />
    <BlogList />

  
  </React.Fragment>
  );
}

}


export default App;