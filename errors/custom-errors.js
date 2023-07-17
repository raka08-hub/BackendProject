class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createcustomerror = (msg, statuscode) => {
  return new CustomAPIError(msg, statuscode);
};

module.exports = { createcustomerror, CustomAPIError };
