import React from 'react';
import { graphql } from 'react-apollo';

import Author from '../Author/';
import { getAuthorsQuery } from '../../queries/'

import './style.scss';

const AuthorList = ({ data }) => ( 
  <main className={'col-small-4 col-medium-8 col-big-7 main-container'} >
    { data.loading && <div> Loading this data... </div> }
    { data.error &&  <div> Error while Loading... </div> }
    { data.authors &&  
      <ul className='book-list'>
        {data.authors.map(author => (
          <Author key={author.id} name={author.name} age={author.age} />
        ))}
      </ul>
    }
  </main>
)


export default graphql(getAuthorsQuery)(AuthorList);