
//this is the database wrapped in knex with helper methods... 
const knex = require("../connection");
const knexPostgis = require('knex-postgis')(knex);
//---------------------------------------------------------------------------------------------------------
    //root control table
//---------------------------------------------------------------------------------------------------------

async function list(){
    return knex("rootcontrol");
}
async function read(id){
    return knex("rootcontrol")
        .select("*")
        .where({FACILITYID: id})
        .orderBy("DATA")
}

//---------------------------------------------------------------------------------------------------------
    //root field work
//---------------------------------------------------------------------------------------------------------

async function listForm(){
    return knex("rootfieldwork");
}
function create(rootcontrol){
    return knex("rootfieldwork")
        .insert(rootcontrol)
        .returning("*")
        .then((createRecords) => createRecords[0])
}
function create(rootcontrol){
    return knex("rootfieldwork")
        .insert(rootcontrol)
        .returning("*")
        .then((createRecords) => createRecords[0])
}
function update(addedRootControl, id) {
    return knex("rootfieldwork")
        .select("*")
}

//---------------------------------------------------------------------------------------------------------
    //map
//---------------------------------------------------------------------------------------------------------

async function readGmFeature(){
    return knex("ssGravitMain")
        .select("id", "FACILITYID",
         knexPostgis.asGeoJSON('geom'))
        .where("LIFECYCLES","=","Active")
        .andWhere("OWNEDBY", "=", 1)
}

module.exports = {
    list,
    listForm,
    readGmFeature,
    read,
    create
}