const { ObjectId } = require('mongodb');
const AppointmentManager = require('../managers/AppointmentManager');
const TherapistManager = require('../managers/TherapistManager');

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
   
	async getAppointmentById(req, res) {
        let response;
		let id = req.params.id
	    try {
		const appointmentManager = new AppointmentManager(req.db);
		response = await appointmentManager.getOne({_id:ObjectId.createFromHexString(String(id))});
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
		const therapistManager = new TherapistManager(req.db);
		response = await appointmentManager.createOne(payload);
        console.log("response was sent as a JSON")
		const filter= {
			_id: new ObjectId(payload.therapistId)
		}
		const update = {
          $push: { [`appointments.${payload.dateSlot}`]: payload.timeSlot }  
		}
		const result = await therapistManager.updateOne(filter, update);
		return res.status(200).send({data: response})
	   } catch(err) {
		console.log(err)
        return res.status(500).send(err);
	  }
    }
}

module.exports = AppointmentController;