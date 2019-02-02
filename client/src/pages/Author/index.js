import React from 'react';
import AuthorList from '../../components/AuthorList';
import FormAuthor from '../../components/FormAuthor';

const Author = () => (
  <div className='container'>
    <div className='grid'>
      <FormAuthor/>
      <AuthorList/>
    </div> 
  </div>
)

export default Author;