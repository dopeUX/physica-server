const {router} = require('../connection');
const AppointmentController = require('../controllers/AppointmentController.js');
const assignDB = require('../middlewares/assignDB.js');
const appointmentController = new AppointmentController(); 

//getAppointments
router.route("/appointments").get(assignDB, appointmentController.getAppointments);

//getById
router.route("/appointments/:id").get(assignDB, appointmentController.getAppointmentById);

//initiateAppointments
router.route("/appointments").post(assignDB, appointmentController.initiateAppointments);

module.exports = router