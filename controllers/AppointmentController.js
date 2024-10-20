const AppointmentManager = require('../managers/AppointmentManager');

class AppointmentController {
    constructor () {}

    async getAppointments(req, res) {
        let response;
	    try {
		const appointmentManager = new AppointmentManager(req.db);
		response = await appointmentManager.getAll();
        console.log("response was sent as a JSON")
		return res.status(200).send({data: response})
	   } catch(err) {
		console.log(err)
        return res.status(500).send(err);
	  }
    }
    
    async initiateAppointments(req, res) {
        let response;
        let payload = req.body;
	    try {
		const appointmentManager = new AppointmentManager(req.db);
		response = await appointmentManager.createOne(payload);
        console.log("response was sent as a JSON")
		return res.status(200).send({data: response})
	   } catch(err) {
		console.log(err)
        return res.status(500).send(err);
	  }
    }
}

module.exports = AppointmentController;