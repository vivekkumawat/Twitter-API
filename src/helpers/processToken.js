const jwt = require("jsonwebtoken");

function encodeTokenWithSecret(payload) {
  const signOptions = {
    algorithm: "HS256",
  };

  const token = jwt.sign(payload, process.env.TOKEN_SECRET, signOptions, {
    expiresIn: "24h",
  });
  return token;
}

function decodeTokenWithSecret(token, callback) {
  const verifyOptions = {
    algorithm: "HS256",
  };
  jwt.verify(token, process.env.TOKEN_SECRET, verifyOptions, (err, decoded) => {
    if (err) {
      return callback(false);
    } else {
      return callback(decoded);
    }
  });
}

module.exports = {
  encodeTokenWithSecret,
  decodeTokenWithSecret,
};
