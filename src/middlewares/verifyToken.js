const statusCode = require("../helpers/statusCode");
const { decodeTokenWithSecret } = require("../helpers/processToken");

module.exports = function verifyToken(req, res, next) {
  let token = req.header("Authorization");
  if (!token)
    return res
      .status(statusCode.unauthorised.code)
      .json({ error: true, message: "No token found!" });

  token = token.replace("Bearer ", "");

  try {
    decodeTokenWithSecret(token, (decoded) => {
      if (!decoded) {
        return res
          .status(statusCode.unauthorised.code)
          .json(statusCode.unauthorised.reason);
      }
      req.userId = decoded;
      next();
    });
  } catch (error) {
    return res.status(statusCode.unauthorised.code).json({
      ...statusCode.unauthorised.reason,
      errorMessage: error.message,
    });
  }
};
