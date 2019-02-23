import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import { EventCard } from './components/cards'
import { LoginPage } from './pages'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/eventCard" component={EventCard}/>
          <Route exact path="/login" component={LoginPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
