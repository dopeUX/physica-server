const BaseManager = require("./BaseManager");
const {getCollection} = require('../utils/getEnvs');

class AppointmentManager extends BaseManager {
    constructor(db) {
      const collection = getCollection().APPOINTMENTS;
      super(db, collection);        
    }
}

module.exports = AppointmentManager;