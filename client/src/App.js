import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/';
import Book from './pages/Book/';
import Author from './pages/Author/';


class App extends Component {
  render() {
    return ( 
      <div className="App">
          <Header/>
            <Switch>
              <Route exact path='/' component={Book} /> 
              <Route exact path='/authors' component={Author} /> 
            </Switch>
      </div>
    );
  }
}

export default App;
