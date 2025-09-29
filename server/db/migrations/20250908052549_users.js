export async function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('auth0Id').primary()
    table.string('name')
    table.string('email')
    table.string('playerTag')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('users')
}
