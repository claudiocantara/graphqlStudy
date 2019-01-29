import React, {
  Component,
  Fragment
} from 'react';
import BookList from '../../components/BookList';
import FormBook from '../../components/FormBook';

class Book extends Component {
  render() {
    return (
      <Fragment>
        < FormBook/>
        < BookList />
       </Fragment> 
    )
  }
}

export default Book;