import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Updog from './components/Updog';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/updog' component={ Updog } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
