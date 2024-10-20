const {router} = require('../connection');
const UserController = require('../controllers/UserController');
const assignDB = require('../middlewares/assignDB.js');
const userController = new UserController(); 

//getUsers
router.route("/user").get(assignDB, userController.getAll);

//getbyid
router.route("/user/:id").get(assignDB, userController.getByID);

//createUser
router.route("/user").post(assignDB, userController.createOne)

module.exports = router