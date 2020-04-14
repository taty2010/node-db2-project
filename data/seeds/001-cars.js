
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, vin: 21638, make: 'Honda', model: 'Civic', mileage: 225757, transmission: 'Auto', status: true },
        {id: 2, vin: 51238, make: 'Toyota', model: 'Corolla', mileage: 300757, transmission: 'Manual', status: true },
        {id: 3, vin: 65910, make: 'Honda', model: 'Accord', mileage: 450757, transmission: 'Auto', status: false }
      ]);
    });
};
