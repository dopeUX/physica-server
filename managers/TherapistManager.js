const BaseManager = require("./BaseManager");
const {getCollection} = require('../utils/getEnvs');

class TherapistManager extends BaseManager {
    constructor(db) {
      const collection = getCollection().THERAPISTS;
      super(db, collection);        
    }
}

module.exports = TherapistManager;