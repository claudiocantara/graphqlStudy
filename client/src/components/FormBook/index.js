import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <aside>
        <form>
          <div className='form-container'>
            <div className='form-item'>
              <label>
                Name:
                <input type='text' name='name'/>
              </label>
            </div>
            <div className='form-item'>
              <label>
                Author:
                <select name='name'>
                  <option> Default Option </option>
                </select>
              </label>
            </div>
            <div className='form-item'>
              <label>
                Gender:
                <input type='text' name='name'/>
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

export default Form