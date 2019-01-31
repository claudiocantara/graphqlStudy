import React, {
  Component
} from 'react';
import BookList from '../../components/BookList';
import FormBook from '../../components/FormBook';

class Book extends Component {
  render() {
    return (
      <div className='container'>
        <div className='grid'>
          < FormBook />
          < BookList />
        </div> 
      </div>
    )
  }
}

export default Book;