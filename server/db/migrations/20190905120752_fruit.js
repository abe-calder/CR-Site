export async function up(knex) {
  return knex.schema.createTable('player_stats', (table) => {
    table.increments('id')
    table.string('tag')
    table.string('name')
    table.integer('exp_level')
    table.integer('trophies')
    table.integer('best_trophies')
    table.integer('wins')
    table.integer('losses')
    table.integer('battle_count')
    table.integer('three_crown_wins')
    table.integer('challenge_cards_won')
    table.integer('challenge_max_wins')
    table.integer('tournament_cards_won')
    table.integer('tournament_battle_count')
    table.string('role')
    table.integer('donations')
    table.integer('donations_received')
    table.integer('total_donations')
    table.integer('war_day_wins')
    table.integer('clan_cards_collected')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('player_stats')
}
