const statusCode = require("../helpers/statusCode");
const User = require("../models/User");

const followUserController = async (req, res) => {
  const { whomId } = req.params;
  const { userId } = req.userId;
  try {
    await User.findByIdAndUpdate(
      { _id: whomId },
      {
        $push: {
          followers: userId,
        },
      },
      { new: true }
    );

    await User.findByIdAndUpdate(
      { _id: userId },
      {
        $push: {
          following: whomId,
        },
      },
      { new: true }
    );
    return res.status(statusCode.success.code).json({
      error: false,
      message: "User followed successfully.",
    });
  } catch (error) {
    return res.status(statusCode.serverFailure.code).json({
      ...statusCode.serverFailure.reason,
      errorMessage: error.message,
    });
  }
};

const unfollowUserController = async (req, res) => {
  const { whomId } = req.params;
  const { userId } = req.userId;

  try {
    await User.findByIdAndUpdate(
      { _id: whomId },
      {
        $pull: {
          followers: userId,
        },
      },
      { new: true }
    );

    await User.findByIdAndUpdate(
      { _id: userId },
      {
        $pull: {
          following: whomId,
        },
      },
      { new: true }
    );
    return res.status(statusCode.success.code).json({
      error: false,
      message: "User unfollowed successfully.",
    });
  } catch (error) {
    return res.status(statusCode.serverFailure.code).json({
      ...statusCode.serverFailure.reason,
      errorMessage: error.message,
    });
  }
};

module.exports = {
  followUserController,
  unfollowUserController,
};
