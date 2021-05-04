const router = require("express").Router();

const {
  loginUserController,
  registerUserController,
} = require("../controllers/AuthController");

router.post("/login", (req, res) => {
  loginUserController(req, res);
});

router.post("/register", (req, res) => {
  registerUserController(req, res);
});

module.exports = router;
