const router = require("express").Router();
const piratesController = require("../../controllers/piratesController");

// Matches with "/api/crew"
router.route("/")
  .get(piratesController.findAllCrews)
  .post(piratesController.create);

module.exports = router;