
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, title: 'Dummy Post 1', content: 'So much Lorem ipsum'},
        {id: 2, title: 'Dummy Post 2', content: 'How much Lorem ipsum?'},
        {id: 3, title: 'Dummy Post 3', content: 'Never enough lorem ipsum.'}
      ])
    }).then(() =>{
      return knex.raw(`SELECT setval('posts_id_seq', (SELECT MAX(id) FROM posts));`)
    })
}
