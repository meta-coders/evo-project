import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import { EventCardContainer, LoginPageContainer } from './containers';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/eventCard" component={EventCardContainer} />
          <Route exact path="/login" component={LoginPageContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
