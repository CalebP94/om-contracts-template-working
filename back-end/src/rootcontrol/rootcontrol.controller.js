const { json } = require("express");
const { addListener } = require("../connection");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./rootcontrol.service");

//---------------------------------------------------------------------------------------------------------
    //QA/QC
//---------------------------------------------------------------------------------------------------------
async function reviewExists(req, res, next) {
    const { rootcontrol } = req.params;
    //console.log(rootcontrol)
    const match = await service.read(rootcontrol);
    if (match.length === 0)
      return next({ status: 404, message: "Review cannot be found." });
    //console.log("LOCALS", res.locals)
    next();
  }
//---------------------------------------------------------------------------------------------------------
    //root control table
//---------------------------------------------------------------------------------------------------------
async function list(req, res, next) {
    const list = await service.list()
    //console.log("THE LIST", list[10])
    res.status(200).json({data: list});
  }
//---------------------------------------------------------------------------------------------------------
    //root field work form
//---------------------------------------------------------------------------------------------------------
  async function listForm(req, res, next) {
    const list = await service.listForm()
    res.status(200).json({data: list});
  }
  function create(req, res, next){
    service
      .create(req.body.data)
      .then((data) => res.status(201).json({data}))
  }

  function read(req, res) {
    res.status(200).json({ data: res.locals });
  }
//---------------------------------------------------------------------------------------------------------
    //map
//---------------------------------------------------------------------------------------------------------
async function readGmFeature(req, res) {
  const gm = await service.readGmFeature();

  
  
  // console.log("GM", gm[10])
  // const geom = gm.map((g)=>{
  //   let geomSplit = g.geom.split(',')
  //   let splicer = geomSplit.splice(3, 6);
  //   return splicer
  // })

  // console.log(geom)
  // const coords = geom.map((arr) => {
  //   let newarr = []
  //   let firstCoord = arr.splice(0,1)
  //   let secondCoord = arr.splice(2,3)
  //   let returner = newarr.push([[firstCoord],[secondCoord]])
  //   return returner;
  // })
  //console.log(coords)
  res.status(200).json({ data: gm});
}


  module.exports = {
    list: [asyncErrorBoundary(list)],
    read: [asyncErrorBoundary(reviewExists), read],
    create,
    listForm,
    readGmFeature
  }