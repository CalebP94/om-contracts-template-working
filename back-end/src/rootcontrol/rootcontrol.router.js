const methodNotAllowed = require("../errors/methodNotAllowed");
const router = require("express").Router();
const controller =  require("./rootcontrol.controller");


router.route("/rootcontrol/table")
    .get(controller.list);

router.route("/rootcontrol/submission")
    .get(controller.listForm)
    .post(controller.create)

router.route("/rootcontrol/map")
    .get(controller.readGmFeature)



module.exports = router;