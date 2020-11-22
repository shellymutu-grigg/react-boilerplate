
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('object').del()
    .then(function () {
      // Inserts seed entries
      return knex('object').insert([
        {id: 1, name: 'object1', description: 'Description for object1'},
        {id: 2, name: 'object2', description: 'Description for object2'}
      ])
    })
}