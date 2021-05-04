const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const {
  postTweetController,
  deleteTweetController,
  showLatestTweetController,
} = require("../controllers/TweetController");

router.post("/post", verifyToken, (req, res) => {
  postTweetController(req, res);
});

router.get("/delete/:tweetId", verifyToken, (req, res) => {
  deleteTweetController(req, res);
});

router.get("/showLatest", verifyToken, (req, res) => {
  showLatestTweetController(req, res);
});

module.exports = router;
