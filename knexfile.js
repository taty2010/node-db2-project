// Update with your config settings.

module.exports = { //config objects

  development: {
    client: 'sqlite3',
    connection: { //specifies how to find the database
      filename: './data/car-dealer.db3'
    },
    useNullAsDefault: true, //if a piece of data is missing it will default as null
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
};
