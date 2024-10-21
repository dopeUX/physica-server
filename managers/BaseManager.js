const {client} = require('../connection');

class BaseManager {
	
	constructor (db, collection) {
      this.db = client.db(db);
      this.collection = this.db.collection(collection)
	}

	async getAll() {
      const res = await this.collection.find().toArray();	
	  return res;
	}

	async getOne(query) {
	  return await this.collection.find(query).toArray();
	}

    async createOne(payload) {
        return await this.collection.insertOne(payload);
    }

	async updateOne(filter, update) {
		return await this.collection.updateOne(filter, update);
	}
}

module.exports = BaseManager;