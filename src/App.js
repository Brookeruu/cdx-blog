import React from 'react';
import Blog from './components/Blog/Blog.jsx';
// import firebase from './firebaseConfig';
import GlobalHeader from './components/Global/GlobalHeader.jsx';
import Helmet from 'react-helmet';
import OAuth from './components/OAuth/OAuth.jsx';
import PropTypes from 'prop-types';
import { Switch, Route, withRoute } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      date: {},
    };
    this.handleSetUser = this.handleSetUser.bind(this);
  }

  handleSetUser(user) {
    this.setState({ user: user });
  }

  render() {
    return (
  <React.Fragment>
    <Helmet>
        <title>Intern Life</title>
        <meta name="description" content="blogs" />
    </Helmet>
<div className="body">
    <GlobalHeader />
    <Switch>
      <Route exact path='/' render={() => <Blog />} />
      <Route path='/admin' render={() => <OAuth onSetUser={this.handleSetUser} />} />
      {/* <Route path='/error404' render={() => <Error404 />} /> */}
    </Switch>

  </div>
  </React.Fragment>
    );
  }
}

export default App;
