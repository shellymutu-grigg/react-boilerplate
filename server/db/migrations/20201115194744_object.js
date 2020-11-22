exports.up = knex => {
    return knex.schema.createTable('object', table => {
      table.increments('id').primary()
      table.string('name')
      table.string('description')
    })
  }
  
  exports.down = knex => {
    return knex.schema.dropTable('object')
  }