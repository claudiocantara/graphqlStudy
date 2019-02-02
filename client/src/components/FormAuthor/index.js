import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import { getAuthorsQuery, saveAuthor } from '../../queries/'
import './style.scss'

class Form extends Component {
  state = { 
      name: '',
      age: 0
    }

  submitForm = (event, saveAuthor) => {
    const { name, age } = this.state 
    event.preventDefault(); 
    saveAuthor({
      variables: {
        name,
        age
      },
      refetchQueries: [{ query: getAuthorsQuery }]
    })

  }

  handleChange = (event,field) => {   
    this.setState({[field]: event.target.value}) 
  }

  render() {
    const { name, age } = this.state
    return (
      <aside className={'col-small-4 col-medium-4 col-big-5 aside-container'}>
        <h4> 
          Add your Author
        </h4>
        <Mutation mutation={saveAuthor} > 
          {
            (saveAuthor, { data, loading, error }) => (
              <form onSubmit={(e) => this.submitForm(e,saveAuthor)}>
                <div className='form-container'>
                  <div className='form-item'>
                    <label>
                      <span> Name: </span>
                      <input type='text' value={name} onChange={(e) => this.handleChange(e, 'name')}/>
                    </label>
                  </div>
                   <div className='form-item'>
                    <label>
                      <span> Age: </span>
                      <input type='number' value={age} onChange={(e) => this.handleChange(e, 'age')}/>
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

export default (Form) 