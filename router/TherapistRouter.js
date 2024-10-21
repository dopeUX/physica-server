const {router} = require('../connection');
const TherapistController = require('../controllers/TherapistController.js');
const assignDB = require('../middlewares/assignDB.js');
const therapistController = new TherapistController(); 

//getTherapist
router.route("/therapist").get(assignDB, therapistController.getTherapists);

//getBYId
router.route("/therapist/:id").get(assignDB, therapistController.getTherapistById);

module.exports = router