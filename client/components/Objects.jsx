import React from 'react'
import { Link } from 'react-router-dom'

import Object from './Object'

function Objects (props) {
  return (
    <>
        <div className='objects'>
        <h1 className='content-subhead'>Objects</h1>
        {props.objects.map(object => {
            return <Object
            key={object.id}
            object={object}
            fetchObjects={props.fetchObjects}
            path={props.location.pathname}
            />
        })}
        </div>
        <br></br>
        <br></br>
        <div>
        <Link to={'/api/v1/objects/new'}>
            <button className='button-secondary pure-button' >Add New Object</button>
          </Link>
        </div>
    </>
  )
}

Objects.defaultProps = {
  objects: []
}

export default Objects