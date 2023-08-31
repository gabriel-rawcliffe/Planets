/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries

  await knex('crabs').insert([
    {
      id: 1,
      species: 'crab species',
      mass: 123,
      length: 123,
      lifetime: 123,
      description: 'crab info',
    },
  ])
}
