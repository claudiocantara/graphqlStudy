import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import './App.css';
import BookList from './components/BookList/'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return ( 
      <ApolloProvider client={client}>
        <div className="App">
            <h1> Here's our List </h1>
            <BookList />
        </div>
        </ApolloProvider>
    );
  }
}

export default App;
