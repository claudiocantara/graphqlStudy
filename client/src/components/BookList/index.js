import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import Book from '../Book/';
import {getBooksQuery} from '../../queries/'

import './style.scss'
class BookList extends Component {
  render() {
    const { data } = this.props;
    return (
      <main className={'col-small-4 col-medium-8 col-big-7 main-container'} >
        {
          data.loading 
          ? <div> Loading this data... </div> 
          : <ul className='book-list'>
              {data.books.map(book => (
                <Book key={book.id} name={book.name} author={book.author} genre={book.genre} id={book.id}/>
              ))}
          </ul>
        }
      </main>
    )
  }
}

export default graphql(getBooksQuery)(BookList);