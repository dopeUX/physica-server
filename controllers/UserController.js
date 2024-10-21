const { ObjectId } = require('mongodb');
const UserManager = require('../managers/UserManager.js');

class UserController {
    constructor() {}

    async getAll(req, res) {
        let response;
	    try {
		const userManager = new UserManager(req.db);
		response = await userManager.getAll();
        console.log("response was sent as a JSON")
		return res.status(200).send({data: response})
	   } catch(err) {
		console.log(err)
        return res.status(500).send(err);
	  }
    }

    async getByID(req, res) {
        let response;
        let id = req.params.id;
	    try {
		const userManager = new UserManager(req.db);
		response = await userManager.getOne({_id:ObjectId.createFromHexString((String(id)))});
        console.log("response was sent as a JSON")
		return res.status(200).send({data: response})
	   } catch(err) {
		console.log(err)
        return res.status(500).send(err);
	  }
    }
  
    async createOne(req, res) {
        let response;
	    try {
		const userManager = new UserManager(req.db);
        const payload = req.body;
		response = await userManager.createOne(payload);
        const insertedDoc = await userManager.getOne({_id:response.insertedId});
        console.log("response was sent as a JSON")
		return res.status(200).send({data: insertedDoc})
	   } catch(err) {
		console.log(err)
        return res.status(500).send(err);
	  }
    }
}

module.exports = UserController;