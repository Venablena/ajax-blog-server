
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table){
    table.increments()
    table.string('title').notNullable().defaultTo('')
    table.text('content').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('posts')
};
