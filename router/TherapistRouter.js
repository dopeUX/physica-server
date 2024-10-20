const {router} = require('../connection');
const TherapistController = require('../controllers/TherapistController.js');
const assignDB = require('../middlewares/assignDB.js');
const therapistController = new TherapistController(); 

//getUsers
router.route("/therapist").get(assignDB, therapistController.getTherapists);

module.exports = router