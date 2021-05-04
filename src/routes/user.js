const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const {
  followUserController,
  unfollowUserController,
} = require("../controllers/UserController");

router.get("/follow/:whomId", verifyToken, (req, res) => {
  followUserController(req, res);
});

router.get("/unfollow/:whomId", verifyToken, (req, res) => {
  unfollowUserController(req, res);
});


module.exports = router;
