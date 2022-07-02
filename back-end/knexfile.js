// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

 require('dotenv').config();
 const path = require("path");

const config = {
  host: 'redgis.postgres.database.azure.com',
  user: 'CalebP94_RedGIS',
  password: 'WhyColumbiaGISTech102!',
  database: 'postgres',
  port: 5432,
  ssl: true
}




const DATABASE_URL_DEVELOPMENT = config


module.exports = {

  development: {
    client: 'postgresql',
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  }

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
