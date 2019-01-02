import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';

import Author from '../Author/';
import {getAuthorsQuery} from '../../queries/'

class AuthorList extends Component {

    render() {
        const { data } = this.props;
        return (
            <Fragment>
                {
                    data.loading 
                    ? <div> Loading this data... </div> 
                    : <ul id='main'>
                        { data.authors.map((author, index) => (
                            <Author key={index} name={author.name} books={author.books} age={author.age} id={author.id}/>
                       ))}
                    </ul>
                }
            </Fragment>
        )
    }
}

export default graphql(getAuthorsQuery)(AuthorList);