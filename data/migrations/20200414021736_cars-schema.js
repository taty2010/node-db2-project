// Changes we want to make
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.blob('vin').unique().notNullable();
    tbl.string('make', 128).notNullable();
    tbl.blob('model').notNullable();
    tbl.integer('mileage').notNullable();
    tbl.string('transmission', 128);
    tbl.boolean('status');
  })
};

//undo changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
