const axios = require("axios");

async function buildPrescriptionResults(prescriptions) {
  const prescriptionList = prescriptions.map(async prescription => {
    const medication = await _getMedication(prescription); //get medication info from prescription
    const { rxcui, generic } = medication.data; //destructure needed variables from medication

    if (generic === false) {
      //use only brand name medications from prescriptions

      const rxcuiList = await _getRxcuiEquivalents(rxcui); //check if rxcui equivalents exist

      const generic = _filterOnlyGenerics(rxcuiList.data); //filter only to generics
      if (generic != undefined) {
        return Object.assign(prescription, {
          //add fields to prescription list for comparison
          genericId: generic.id,
          rxcui: rxcui
        });
      }
    }
  });

  const promiseResults = await Promise.all(prescriptionList); //waits for all promises to resolve from map function
  const results = cleanUp(promiseResults); //copies and cleans up presentation of objects
  return results;
}

function cleanUp(results) {
  //remove any null values generated above
  const resultsNoNulls = _removeNullValues(results);
  const finalObjects = resultsNoNulls.map(object => {
    //copies each object to new object for presentation purposes
    let copy = Object.assign(
      {},
      {
        prescription_id: object.id,
        medication_id: object.genericId
      }
    );
    return copy;
  });

  return finalObjects;
}

async function _getMedication(prescription) {
  const medication = await axios
    .get(
      `http://api-sandbox.pillpack.com/medications/${
        prescription.medication_id
      }`
    )
    .catch(err => {
      res.status(404).json({
        message: `Error while getting medication from prescription list ${
          err.message
        }`
      });
    });
  return medication;
}

async function _getRxcuiEquivalents(rxcui) {
  const medicationList = await axios
    .get(`http://api-sandbox.pillpack.com/medications?rxcui=${rxcui}`)
    .catch(err => {
      res.status(404).json({
        message: `Error while looking up generic medication via rxcui, ${
          err.message
        }`
      });
    });
  return medicationList;
}

function _filterOnlyGenerics(list) {
  const result = list.find(_isGeneric);
  return result;
}

function _isGeneric(medication) {
  return medication.generic === true;
}

function _removeNullValues(list) {
  const result = list.filter(item => item != null);
  return result;
}

const getPrescriptions = async url => {
  let result = await axios.get(url);
  return result.data;
};

module.exports = {
  buildPrescriptionResults: buildPrescriptionResults,
  getPrescriptions: getPrescriptions
};
