import React from 'react';

const Book = ({name, author, genre, id}) => (
    <li>
        <div> Name: {name} </div>
        <div> Author: {author.name} </div>
        <div> Gender: {genre} </div>
    </li>  
)

Book.defaultProps = {
    id: '',
    name: '',
    author: '',
    genre: ''
}

export default Book;