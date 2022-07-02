exports.up = function (knex) {
    return knex.schema.createTable("rootcontrol", (table) => {
      table.increments("object_id").primary();
      table.date("date").notNullable();
      table.date("guarantee").notNullable();
      table.string("address").notNullable();
      table.string("us_id")
      table.string("ds_id");
      table.string("facilityid").notNullable();
      table.string("wetweather");
      table.string("temp");
      table.integer("pipe-size").notNullable();
      table.integer("length");
      table.string('rate');
      table.string('cost');
      table.string('comments');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("rootcontrolpayapp");
  };