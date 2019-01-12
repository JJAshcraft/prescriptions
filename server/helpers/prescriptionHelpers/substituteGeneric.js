const utilities = require("../../utilities/utilities");
axios = require("axios");
// const testData = require("./testdata.js");

const substituteGeneric = async (req, res, next) => {
  try {
    let prescriptions;
    const url = "http://api-sandbox.pillpack.com/prescriptions";
    prescriptions = await utilities.getPrescriptions(url);

    const build = await utilities.buildPrescriptionResults(prescriptions);
    const results = { prescription_updates: build };
    res.json(results);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = { substituteGeneric: substituteGeneric };
