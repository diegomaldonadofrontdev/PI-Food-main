const { getDietsTypesDb } = require("../controllers/dietsController");

const getDietsHandler = async (req, res) => {
  res.send(await getDietsTypesDb());
};

module.exports = { getDietsHandler };
