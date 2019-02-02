import React from 'react';
import './style.scss';

const Author = ({name, age }) => (
  <li className='author-item'>
  <p>
    <span className='item-description'>Name:</span> 
    {name} 
  </p>
  <p>
    <span className='item-description'>Age: </span> 
    {age} 
  </p>
</li>    
)



export default Author;