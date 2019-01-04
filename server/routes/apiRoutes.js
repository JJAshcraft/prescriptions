const express = require("express");
const prescriptionRoutes = require("./prescriptionRoutes.js");

const router = express.Router();

router.use("/prescriptions", prescriptionRoutes);

module.exports = router;
