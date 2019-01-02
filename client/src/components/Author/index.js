import React from 'react';

const Author = ({name, books, age, id}) => (
    <li>
        <div> Name: {name} </div>
        <div> age: {age} </div>
    </li>  
)

Author.defaultProps = {
    id: '',
    name: '',
    books: [],
    age: 0
}

export default Author;