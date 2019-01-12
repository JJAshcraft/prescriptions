const getMedications = require("../../services/getMedications.js");
const getPrescriptions = require("../../services/getPrescriptions.js");
const utilities = require("../../utilities/utilities");
const testData = require("./testdata.js");
axios = require("axios");
const wrapAsync = utilities.wrapAsync;

const substituteGeneric = async (req, res, next) => {
  const prescriptions = await getPrescriptions();

  try {
    const build = await utilities.buildPrescriptionResults(prescriptions);
    const results = { prescription_updates: build };
    res.json(results);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = substituteGeneric;
