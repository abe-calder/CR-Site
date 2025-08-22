export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('player_stats').del()

  // Inserts seed entries
  await knex('player_stats').insert([
    {
      tag: '#2RYC9YQCY',
      name: 'Smoil',
      exp_level: 58,
      trophies: 10000,
      best_trophies: 10000,
      wins: 4933,
      losses: 5675,
      battle_count: 10608,
      three_crown_wins: 1298,
      challenge_cards_won: 598,
      challenge_max_wins: 7,
      tournament_cards_won: 0,
      tournament_battle_count: 123,
      role: 'member',
      donations: 73,
      donations_received: 40,
      total_donations: 4791,
      war_day_wins: 0,
      clan_cards_collected: 0,
    },
  ])
}
