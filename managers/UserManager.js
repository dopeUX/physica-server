const BaseManager = require("./BaseManager");
const {getCollection} = require('../utils/getEnvs');

class UserManager extends BaseManager {
    constructor(db) {
      const collection = getCollection().USERS;
      super(db, collection);        
    }
}

module.exports = UserManager;