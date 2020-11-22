import React from 'react'

import { addObject, updateObject } from '../api'

class ObjectForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errorMessage: '',
      object: {
        name: '',
        description: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    const {object} = this.props
    if (object) this.setNewObject(object)
  }

  componentWillReceiveProps (nextProps) {
    const {object} = nextProps
    if (object && !this.props.object) this.setNewObject(object)
  }

  setNewObject (object) {
    this.setState({
        object: Object.assign({}, object)
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const {object, history, fetchObjects} = this.props

    if (object) {
      updateObject(this.state.object)
        .then(fetchObjects)
        .then(navigateToObject(object.id))
        .catch(err => this.setState({errorMessage: err.message}))
    } else {
      addObject(this.state.object)
        .then(newObject => {
          return fetchObjects()
          .then(navigateToObject(newObject[0].id)) 
        })
        .catch(err => this.setState({errorMessage: err.message}))
    }

    function navigateToObject (id) {  
      return () => history.push(`/api/v1/objects/${id}`)
    }
  }

  handleChange (e) {
    const newObject = {
      ...this.state.object,
      [e.target.name]: e.target.value
    }
    
    this.setState({
      object: newObject
    })
  }

  render () {
    return (
      <form className='pure-form pure-form-aligned' onSubmit={this.handleSubmit}>
        {this.props.object
          ? <h2 className='object-name'>Edit Object</h2>
          : <h2 className='object-name'>Add a New Object</h2>
        }

        <fieldset>
          <div className='pure-control-group'>
            <label htmlFor='title-name'>Name</label>
            <input
              type='text'
              name='name'
              value={this.state.object.name}
              onChange={this.handleChange}
            />
          </div>

          <div className='pure-control-group'>
            <label htmlFor='description'>Description</label>
            <textarea
              type='text'
              name='description'
              value={this.state.object.description}
              onChange={this.handleChange}>
            </textarea>
          </div>

          <div className='pure-controls'>
            <input className='pure-button' type='submit' />
          </div>
        </fieldset>

        <p>{this.state.errorMessage && this.state.errorMessage}</p>
      </form>
    )
  }
}

export default ObjectForm