import React from 'react';
import './style.scss'

const Book = ({name, author, genre, id}) => (
    <li className='book-item'>
        <p>
          <span className='item-description'>Name:</span> {name} 
        </p>
        <p>
          <span className='item-description'>Author: </span> {author.name} 
        </p>
        <p>
          <span className='item-description'>Gender: </span> {genre} 
        </p>
    </li>  
)

Book.defaultProps = {
    id: '',
    name: '',
    author: '',
    genre: ''
}

export default Book;