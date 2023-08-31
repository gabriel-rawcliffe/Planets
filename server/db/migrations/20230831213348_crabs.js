/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('crabs', (table) => {
    table.increments('id').primary()
    table.string('species')
    table.string('description')
    table.integer('mass')
    table.integer('lifetime')
    table.integer('length')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('crabs')
}
