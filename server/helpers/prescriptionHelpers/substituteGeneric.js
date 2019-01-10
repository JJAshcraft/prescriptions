const getMedications = require("../../services/getMedications.js");
const getPrescriptions = require("../../services/getPrescriptions.js");
const utilities = require("../../utilities/utilities");
const testData = require("./testdata.js");
axios = require("axios");

const substituteGeneric = async (req, res, next) => {
  // const prescriptions = await getPrescriptions();
  // const medications = await getMedications();
  const prescriptions = testData.scripts;
  const medications = testData.meds;

  const parseBrandNameMeds = await utilities.parseBrandNameMeds(
    medications,
    prescriptions
  );

  const rxcuiGenericMedications = await utilities.getRxcuiMedications(
    parseBrandNameMeds
  );
  console.log(rxcuiGenericMedications);
  const buildPrescriptionUpdate = utilities.buildPrescriptionUpdate(
    parseBrandNameMeds,
    rxcuiGenericMedications
  );
  const results = { prescription_updates: buildPrescriptionUpdate };
  res.json(results);
};

module.exports = substituteGeneric;
