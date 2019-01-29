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
          < FormBook className='col-small-4 col-medium-4 col-big-5'/>
          < BookList className='col-small-4 col-medium-8 col-big-7'/>
        </div> 
      </div>
    )
  }
}

export default Book;