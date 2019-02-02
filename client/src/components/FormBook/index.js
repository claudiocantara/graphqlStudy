import React, { Component, Fragment } from 'react';
import { graphql, compose, Mutation } from 'react-apollo';

import { getAuthorsList, saveBook, getBooksQuery } from '../../queries/'
import './style.scss'
class Form extends Component {
  state = { 
      name: '',
      authorId: '',
      genre: ''
    }
  templateAuthors = () => {
    const { authorList } = this.props
  
    return (
      <Fragment>  
        { authorList.loading && <option> loading options </option> }
        { authorList.error && <option> loading error </option> }
        { authorList.authors && authorList.authors.map((author) => (
           <option key={ author.id } value={author.id}> { author.name } </option>
          ))
        }
      </Fragment>
    )
  }

  submitForm = (event, saveBook) => {

    const { name, genre, authorId } = this.state 
    event.preventDefault(); 
    saveBook({
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
      <aside className={'col-small-4 col-medium-4 col-big-5 aside-container'}>
        <h4> 
          Add your Book
        </h4>
        <Mutation mutation={saveBook} > 
          {
            (saveBook, { data, loading, error }) => (
              <form onSubmit={(e) => this.submitForm(e,saveBook)}>
                <div className='form-container'>
                  <div className='form-item'>
                    <label>
                      <span> Name: </span>
                      <input type='text' value={name} onChange={(e) => this.handleChange(e, 'name')} name='name'/>
                    </label>
                  </div>
                  <div className='form-item'>
                    <label>
                      <span> Author: </span>
                      <select name='name' value={authorId} onChange={(e) => this.handleChange(e, 'authorId')}>
                        <option> Default Option </option>
                        { this.templateAuthors() }
                      </select>
                    </label>
                  </div>
                  <div className='form-item'>
                    <label>
                      <span> Gender: </span>
                      <input type='text' value={genre} onChange={(e) => this.handleChange(e, 'genre')} name='name'/>
                    </label>
                  </div>
                  <div className='form-item'>
                    <button type='submit' disabled={loading}> Save </button>
                  </div>
                  {
                    loading &&
                      <div className='form-item'>
                        Saving...
                      </div>
                  }
                  {
                    error &&
                      <div className='form-item'>
                        Something went wrong, verify your data and try again.
                      </div>
                  }
                </div>
              </form>
            )
          }
        </Mutation>
      </aside>
    )
  }
}

export default compose(
  graphql(getAuthorsList, { name: 'authorList' })
)(Form) 