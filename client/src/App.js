import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/';
import BookList from './components/BookList/';
import AuthorList from './components/AuthorList/';


class App extends Component {
  render() {
    return ( 
      <div className="App">
          <Header/>
          <Switch>
            <Route exact path='/' component={BookList} /> 
            <Route exact path='/authors' component={AuthorList} /> 
          </Switch>
      </div>
    );
  }
}

export default App;
