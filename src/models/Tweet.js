const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  tweet: {
    type: String,
    required: true,
    max: 140,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Tweet", tweetSchema);
