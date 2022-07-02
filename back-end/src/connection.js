//get the database... 
const env = process.env.NODE_ENV || "development";



//knex - the actual database connection 'string'
const config = require("../knexfile")[env]; 
//- equals config below
// const config = {
//     host: 'redgis.postgres.database.azure.com',
//     user: 'CalebP94_RedGIS',
//     password: 'WhyColumbiaGISTech102!',
//     database: 'postgres',
//     port: 5432,
//     ssl: true
//   }
const knex = require("knex")(config);

console.log(env);

module.exports = knex;