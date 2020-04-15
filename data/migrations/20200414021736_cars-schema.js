// Changes we want to make
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.text('vin', 128).unique().notNullable();
    tbl.text('make', 128).notNullable();
    tbl.text('model').notNullable();
    tbl.integer('mileage').notNullable();
    tbl.text('transmission', 128);
    tbl.boolean('status');
  })
};

//undo changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
