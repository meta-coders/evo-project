import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import { EventCardContainer } from './containers';
import { LoginPage } from './pages';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/eventCard" component={EventCardContainer} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
