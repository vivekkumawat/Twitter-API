const router = require("express").Router();
const authRoutes = require("./auth");
const tweetRoutes = require("./tweet");
const userRoutes = require("./user");

// Authentication Routes
router.use("/auth", authRoutes);

// Private Routes
router.use("/tweet", tweetRoutes);
router.use("/user", userRoutes);

module.exports = router;
