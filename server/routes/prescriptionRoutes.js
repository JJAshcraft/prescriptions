const express = require("express");
const router = express.Router();
const helper = require("../helpers/prescriptionHelpers/prescriptionModules.js");

router
  .route("/substituteGeneric")
  .get(helper.substituteGeneric.substituteGeneric);

module.exports = router;
