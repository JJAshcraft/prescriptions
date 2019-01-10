const axios = require("axios");

const getMedications = async () => {
  const result = await axios.get("http://api-sandbox.pillpack.com/medications");
  return result.data;
};

module.exports = getMedications;
