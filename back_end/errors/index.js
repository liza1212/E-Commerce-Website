const NotFoundError = require("./not-found");
const UnauthenticatedError = require("./unauthenticated");
const BadRequestError = require("./bad-requests");
const CustomAPIError = require("./custom-error");
const ForbiddenError = require("./forbidden");

module.exports = {
    NotFoundError,
    UnauthenticatedError,
    BadRequestError,
    CustomAPIError,
    ForbiddenError,
}