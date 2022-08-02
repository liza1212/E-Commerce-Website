const NotFoundError = require("./not-found");
const UnauthenticatedError = require("./unauthenticated");
const BadRequestError = require("./bad-requests");
const CustomAPIError = require("./custom-error");

module.exports = {
    NotFoundError,
    UnauthenticatedError,
    BadRequestError,
    CustomAPIError,
}