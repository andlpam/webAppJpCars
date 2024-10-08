const express = require("express");
const router = express.Router();
const mechanicController = require("../controllers/mechanicController");

router.get("/", mechanicController.getAllMechanics);
router.get(
  "/:mechanicId/availability/:date",
  mechanicController.getMechanicAvailability
);

module.exports = router;
