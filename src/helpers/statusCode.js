// All the Essential response status codes
const statusCode = {
  success: {
    code: 200,
    reason: {
      message: "Success",
      status: true,
      error: false,
    },
  },
  unauthorised: {
    code: 401,
    reason: {
      message: "Unauthorised",
      status: false,
      error: true,
    },
  },
  fieldMissing: {
    code: 400,
    reason: {
      message: "Invalid Request, Required Params Missing",
      status: false,
      error: true,
    },
  },
  invalidField: {
    code: 403,
    reason: {
      message: "Bad Request. Invalid Params Type",
      status: false,
      error: true,
    },
  },
  notFound: {
    code: 404,
    reason: {
      message: "Data not found",
      status: false,
      error: true,
    },
  },
  duplicateFound: {
    code: 409,
    reason: {
      message: "Duplicate data found",
      status: false,
      error: true,
    },
  },
  serverFailure: {
    code: 500,
    reason: {
      message: "Server Crashed",
      status: false,
      error: true,
    },
  },
};

module.exports = statusCode;
