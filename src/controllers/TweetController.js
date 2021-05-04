const statusCode = require("../helpers/statusCode");
const Tweet = require("../models/Tweet");
const User = require("../models/User");

const postTweetController = async (req, res) => {
  const { tweet } = req.body;
  const { userId } = req.userId;

  if (!tweet) {
    return res
      .status(statusCode.invalidField.code)
      .json({ error: true, message: "Tweet description cannot be empty." });
  }
  try {
    await Tweet.create({
      user_id: userId,
      tweet,
    });
    return res.status(statusCode.success.code).json({
      error: false,
      message: "Tweet posted successfully.",
    });
  } catch (error) {
    return res.status(statusCode.serverFailure.code).json({
      ...statusCode.serverFailure.reason,
      errorMessage: error.message,
    });
  }
};

const deleteTweetController = async (req, res) => {
  const { tweetId } = req.params;

  if (!tweetId) {
    return res
      .status(statusCode.invalidField.code)
      .json({ error: true, message: "Tweet ID cannot be empty." });
  }

  try {
    await Tweet.deleteOne({
      _id: tweetId,
    });
    return res.status(statusCode.success.code).json({
      error: false,
      message: "Tweet deleted successfully.",
    });
  } catch (error) {
    return res.status(statusCode.serverFailure.code).json({
      ...statusCode.serverFailure.reason,
      errorMessage: error.message,
    });
  }
};

const showLatestTweetController = async (req, res) => {
  const { userId } = req.userId;
  try {
    const userDetails = await User.find(
      { _id: userId },
      { _id: 0, following: 1 }
    );
    let followingList = [];
    userDetails.forEach((element) => {
      element.following.forEach((el) => {
        followingList.push(el);
      });
    });

    const latestTweets = await Tweet.find({
      $or: [{ user_id: userId }, { user_id: { $in: followingList } }],
    }).sort({ date: -1 });
    return res.status(statusCode.success.code).json({
      error: false,
      latest_tweets: latestTweets,
    });
  } catch (error) {
    return res.status(statusCode.serverFailure.code).json({
      ...statusCode.serverFailure.reason,
      errorMessage: error.message,
    });
  }
};

module.exports = {
  postTweetController,
  deleteTweetController,
  showLatestTweetController,
};
