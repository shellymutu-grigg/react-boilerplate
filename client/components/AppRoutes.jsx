import React from 'react'

import {Route, Switch} from 'react-router-dom'

import Object from './Object'
import Objects from './Objects'
import ObjectForm from './ObjectForm'

class Routes extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={props => (
            <Objects
              objects={this.props.objects}
              fetchObjects={this.props.fetchObjects}
              {...props}
            />
          )} />
          <Route path='/api/v1/objects/new' render={(props) => (
            <ObjectForm
              fetchObjects={this.props.fetchObjects}
              {...props}
            />
          )} />
          <Route path='/api/v1/objects/edit/:id' render={(props) => (
            <ObjectForm
              fetchObjects={this.props.fetchObjects}
              object={this.props.objects.find(object => (
                object.id === Number(props.match.params.id))
              )}
              {...props}
            />
          )} />
          <Route path='/api/v1/objects/:id' render={props => (
            <Object
              fetchObjects={this.props.fetchObjects}
              object={this.props.objects.find((object) =>
                object.id === Number(props.match.params.id)
              )}
              {...props}
            />
          )} />
        </Switch>
      </div>
    )
  }
}

export default Routes
