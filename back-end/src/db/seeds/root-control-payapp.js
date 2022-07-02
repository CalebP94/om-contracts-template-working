
const rootcontrol = require("../seeds/root-control-payapp.json");

exports.seed = function (knex) {
  return knex
  .raw("TRUNCATE TABLE rootcontrol RESTART IDENTITY CASCADE")
  .then(() => {
    return knex("rootcontrol").insert(rootcontrol)
  })
};
