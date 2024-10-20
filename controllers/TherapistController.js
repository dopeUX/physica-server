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
}

module.exports = TherapistController;