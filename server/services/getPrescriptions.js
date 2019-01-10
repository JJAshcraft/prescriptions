const axios = require("axios");

const getPrescriptions = async () => {
  let result = await axios.get("http://api-sandbox.pillpack.com/prescriptions");
  return result.data;
};

module.exports = getPrescriptions;
