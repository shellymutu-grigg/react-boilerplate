import React from 'react'
import { Link}  from 'react-router-dom'

import { deleteObject } from '../api'

class Object extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errorMessage: '',
    }
  }

  componentDidMount () {
    const id = this.props.object.id || this.props.match.params.id
    if (id) { 
        // Render join of tables once new table entered
    }
  }

  removeObject = (e) => {
    // e.preventDefault()
    console.log("Object removeObject:", JSON.stringify(this.props.object, null,2))
    deleteObject(this.props.object.id)
      .then(this.props.fetchObjects)
      .then(() => this.props.history.push(`/`))
      .catch(err => this.setState({errorMessage: err.message}))
  }

  render () {
    const {id, name, description} = this.props.object
    return (
      <div className='object'>
          <Link to={`/api/v1/objects/${id}`}>
          <header className='object-header'>
          <h2 className='object-name'>{name}</h2>
          </header></Link>
          <h2 className='object-description'>{description}</h2>

        <div className='pure-button-group' role='group'>
          <Link to={`/api/v1/objects/edit/${id}`}>
            <button className='button-secondary pure-button'>Edit</button>
          </Link>
          <button
            className='button-error pure-button'
            onClick={this.removeObject}>
            Delete
          </button>
        </div>
        {this.state.errorMessage && this.state.errorMessage}
      </div>
    )
  }
}

Object.defaultProps = {
    object: {
      id: null,
      name: '',
      description: ''
    }
  }

export default Object
