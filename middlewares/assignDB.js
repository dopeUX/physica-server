const { getDB } = require("../utils/getEnvs");

function assignDB (req, res, next) {
  const db = getDB();
  req['db'] = db;
  next();
}

module.exports = assignDB;