const router = require("express").Router();
const userController = require("../controllers/userController");

router.use((req, res, next) => {
	if (req.isAuthenticated()) {
		next();
	} else {
		res.redirect("http://localhost:3000");
	}
});

router.get("/", userController.getUser);
// dummy api
router.get("/getAll", userController.getAllUser);
// dummy api to add users to database for testing purpose don't use unless needed
router.post("/create", userController.createUser);
router.get("/profile/:id", userController.singleUser);
// api to show logged user requests
router.get("/showRequests/:id", userController.showRequests);
// api to show logged user friends
router.get("/friends/:id", userController.getFriends);
// api to add/accept request
router.put("/profile/addFriend/:id", userController.addUser);
router.put("/profile/acceptFriend/:id", userController.acceptUserRequest);
router.get("/logout", (req, res) => {
	console.log("isnide logout");
	res.clearCookie();
});

module.exports = router;
