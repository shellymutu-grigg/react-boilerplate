// Create database side of api functions
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getObjects,
  addObject,
  getObject,
  updateObject,
  deleteObjectById
}

// Create getObjects function for api on server/database side
function getObjects (db = connection) {
  return db('object').select()
}

// Create addObjects function for api on server/database side
function addObject (newObject, db = connection) {
  return db('object').insert(newObject)
}

// Create getObject function for api on server/database side
function getObject (id, db = connection) {
  return db('object').where('object.id', id).select('id', 'name', 'description')
}

// Create updateObject function for api on server/database side
function updateObject (id, update, db = connection) {
  return db('object').where('object.id', id).update(update)
}

// Create deleteObjectById function for api on server/database side
function deleteObjectById(id, db = connection) {
  console.log("db.js deleteObject:", id)
  return db('object').where('object.id', id).delete()
}