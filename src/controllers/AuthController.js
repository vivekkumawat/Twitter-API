const statusCode = require("../helpers/statusCode");
const User = require("../models/User");
const { encodeTokenWithSecret } = require("../helpers/processToken");

const registerUserController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    isUserExists = await User.findOne({ email });
    if (isUserExists) {
      return res
        .status(statusCode.duplicateFound.code)
        .json({ error: true, message: "User already exists." });
    }

    const encryptedPassword = encodeTokenWithSecret(password);

    await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    return res.status(statusCode.success.code).json({
      error: false,
      message: "User registerd successfully.",
    });
  } catch (error) {
    return res.status(statusCode.serverFailure.code).json({
      ...statusCode.serverFailure.reason,
      errorMessage: error.message,
    });
  }
};

const loginUserController = async (req, res) => {
  const { email, password } = req.body;
  try {
    isUserExists = await User.findOne({ email });
    if (!isUserExists) {
      return res
        .status(statusCode.notFound.code)
        .json({ error: true, message: "Sorry user not found." });
    }

    if (encodeTokenWithSecret(password) !== isUserExists.password) {
      return res
        .status(statusCode.unauthorised.code)
        .json({ error: true, message: "Wrong username and password." });
    }

    const authToken = encodeTokenWithSecret({
      userId: isUserExists._id,
    });

    return res.status(statusCode.success.code).json({
      error: false,
      message: "User logged in successfully.",
      authToken: authToken,
    });
  } catch (error) {
    return res.status(statusCode.serverFailure.code).json({
      ...statusCode.serverFailure.reason,
      errorMessage: error.message,
    });
  }
};

module.exports = {
  loginUserController,
  registerUserController,
};
