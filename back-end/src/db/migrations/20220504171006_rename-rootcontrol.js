exports.up = function (knex) {
    return knex.schema.table("rootcontrol", (table) => {
      table.renameColumn("date", "DATA");
      table.renameColumn("guarantee", "GURANTEE");
      table.renameColumn("address", "ADDRESS");
      table.renameColumn("us_id", "US_ID");
      table.renameColumn("ds_id", "DS_ID");
      table.renameColumn("facilityid", "FACILITYID");
      table.renameColumn("wetweather", "WETWEATHER");
      table.renameColumn("temp", "TEMP");
      table.renameColumn("pipe-size", "PIPE-SIZE");
      table.renameColumn("length", "LENGTH-TREATED");
      //table.renameColumn("agent", "AGENT");
      table.renameColumn("rate", "RATE");
      table.renameColumn("cost", "COST");
      table.renameColumn("comments", "FIELD14");
      table.string("AGENT");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("rootcontrolpayapp");
  };