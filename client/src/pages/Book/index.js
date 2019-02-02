import React from 'react';
import BookList from '../../components/BookList';
import FormBook from '../../components/FormBook';

const Book  = () => (
  <div className='container'>
    <div className='grid'>
      < FormBook />
      < BookList />
    </div> 
  </div>
)

export default Book;