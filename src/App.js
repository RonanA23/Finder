import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import User from './components/Useritems/User';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from '../components/pages/NotFound';

import GithubState from './context/github/Githubstate';
import AlertState from './context/alert/Alertstate';

//import Useritem from './components/Useritems/Useritem';

//make user, useritems,searchbar, axios request to fill state.

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

/* */
