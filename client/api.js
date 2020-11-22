// Create client portion of api functions
import request from 'superagent'

const objectUrl = 'http://localhost:3000/api/v1/objects'

// Create getObjects function for api on client components side
export function getObjects () {
  return request
    .get(objectUrl)
    .then(response => response.body)
    .catch(errorHandler('GET', '/'))
}

// Create getObject function for api on client components side
export function getObject (objectId) {
  return request.get(`/api/v1/objects/${objectId}`)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('GET', '/:id'))
}

// Create addObject function for api on client components side
export function addObject (object) {
  return request.post('/api/v1/objects/')
    .send(object)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('POST', '/'))
}

// Create updateObject function for api on client components side
export function updateObject (object) {
  return request.patch(`/api/v1/objects/${object.id}`)
    .send(object)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('PATCH', `/objects/${object.id}`))
}

// Create deleteObject function for api on client components side
export function deleteObject (objectId) {
  console.log("api.js deleteObject:", objectId)
  return request.del(`/api/v1/objects/${objectId}`)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('DELETE', '/api/v1/objects/:id'))
}

// Handle errors in application
function errorHandler (method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(`Error: API route for ${method} ${route} ${err.message} missing`)
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}


