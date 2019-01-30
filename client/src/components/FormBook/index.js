import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

import { getAuthorsList, saveBook, getBooksQuery } from '../../queries/'
class Form extends Component {
  state = {
      name: '',
      authorId: '',
      genre: ''
    }
  templateAuthors = () => {
    const { authorList } = this.props
  
    return (
        authorList.loading
          ? <option> loading options </option>
          : authorList.authors.map((author) => (
            <option key={ author.id } value={author.id}> { author.name } </option>
          ))
      )
  }

  submitForm = (event) => {

    const { name, genre, authorId } = this.state 
    event.preventDefault(); 
    this.props.saveBook({
      variables: {
        name,
        genre,
        authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    })
  }

  handleChange = (event,field) => {   
    this.setState({[field]: event.target.value}) 
  }

  render() {
    const { name, authorId, genre } = this.state
    return (
      <aside className={this.props.className}>
        <form onSubmit={this.submitForm}>
          <div className='form-container'>
            <div className='form-item'>
              <label>
                Name:
                <input type='text' value={name} onChange={(e) => this.handleChange(e, 'name')} name='name'/>
              </label>
            </div>
            <div className='form-item'>
              <label>
                Author:
                <select name='name' value={authorId} onChange={(e) => this.handleChange(e, 'authorId')}>
                  <option> Default Option </option>
                  { this.templateAuthors() }
                </select>
              </label>
            </div>
            <div className='form-item'>
              <label>
                Gender:
                <input type='text' value={genre} onChange={(e) => this.handleChange(e, 'genre')} name='name'/>
              </label>
            </div>
            <div className='form-item'>
              <button type='submit'> Save </button>
            </div>
          </div>
        </form>
      </aside>
    )
  }
}

export default compose(
  graphql(getAuthorsList, { name: 'authorList' }),
  graphql(saveBook, { name: 'saveBook' } )
)(Form) 