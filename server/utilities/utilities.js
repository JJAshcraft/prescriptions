const axios = require("axios");

function parseBrandNameMeds(meds, prescriptions) {
  const newPrescriptions = prescriptions.map(scripts => {
    const newMeds = meds.filter(
      med => med.generic === false && scripts.medication_id === med.id
    );
    return newMeds[0];
  });
  filteredPrescriptions = removeUndefinedValues(newPrescriptions);
  return filteredPrescriptions;
}

async function getRxcuiMedications(medications) {
  const promises = medications.map(async medication => {
    const rxcuiList = await axios.get(
      `http://api-sandbox.pillpack.com/medications?rxcui=${medication.rxcui}`
    );
    return filterOnlyGenerics(rxcuiList.data);
  });

  const results = await Promise.all(promises);
  filteredResults = removeUndefinedValues(results);
  return filteredResults;
}

function filterOnlyGenerics(medications) {
  const generics = medications.filter(
    medication => medication.generic === true
  );
  return generics[0];
}

function removeUndefinedValues(array) {
  const results = array.filter(el => el != undefined);
  return results;
}

function buildPrescriptionUpdate(prescriptions, medications) {
  const prescriptionUpdate = prescriptions.map(script => {
    const matchingGeneric = medications.filter(medication => {
      if (medication.id != script.id) {
        return false;
      } else {
        return true;
      }
    });

    console.log(matchingGeneric);
    const result = {
      prescription_id: script.id,
      medication_id: matchingGeneric.id
    };
    return result;
  });

  return prescriptionUpdate;
}

module.exports = {
  parseBrandNameMeds: parseBrandNameMeds,
  getRxcuiMedications: getRxcuiMedications,
  filterOnlyGenerics: filterOnlyGenerics,
  buildPrescriptionUpdate: buildPrescriptionUpdate
};
