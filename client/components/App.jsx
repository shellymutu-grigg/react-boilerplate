import React from 'react'

import AppRoutes from './AppRoutes'

import {getObjects} from '../api'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      objects: [],
      errorMessage: ''
    }
    this.fetchObjects = this.fetchObjects.bind(this)
  }

  componentDidMount () {
    this.fetchObjects()
  }

  fetchObjects () {
    return getObjects()
      .then(objects => {
        this.setState({objects: objects})
      })
      .catch(err => {
        this.setState({errorMessage: err.message})
      })
  }

  render () {
    return (
      <div id='layout' className='pure-g'>
        <div className='content pure-u-1 pure-u-md-3-4'>
          <AppRoutes
            objects={this.state.objects}
            fetchObjects={this.fetchObjects}
          />
          {this.state.errorMessage &&
            <h1>{this.state.errorMessage}</h1>
          }
        </div>
      </div>
    )
  }
}
