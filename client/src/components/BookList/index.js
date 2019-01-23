import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';

import Book from '../Book/';
import {getBooksQuery} from '../../queries/'

class BookList extends Component {
    componentDidMount() {
        console.log(this.props.data);
    }
    render() {
        const { data } = this.props;
        
        return (
            <Fragment>
                {
                    data.loading 
                    ? <div> Loading this data... </div> 
                    : <ul id='main'>
                        {data.books.map(book => (
                            <Book key={book.id} name={book.name} author={book.author} genre={book.genre} id={book.id}/>
                       ))}
                    </ul>
                }
            </Fragment>
        )
    }
}

export default graphql(getBooksQuery)(BookList);