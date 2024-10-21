const { ObjectId } = require("mongodb");
const TherapistManager = require("../managers/TherapistManager");

class TherapistController {
    constructor () {}

    async getTherapists(req, res) {
        let response;
	    try {
		const therapistManager = new TherapistManager(req.db);
		response = await therapistManager.getAll();
        console.log("response was sent as a JSON")
		return res.status(200).send({data: response})
	   } catch(err) {
		console.log(err)
        return res.status(500).send(err);
	  }
    }
   
	async getTherapistById(req, res) {
        let response;
		let id = req.params.id
	    try {
		const therapistManager = new TherapistManager(req.db);
		response = await therapistManager.getOne({_id:ObjectId.createFromHexString(String(id))});
        console.log("response was sent as a JSON")
		return res.status(200).send({data: response})
	   } catch(err) {
		console.log(err)
        return res.status(500).send(err);
	  }
    }
}

module.exports = TherapistController;