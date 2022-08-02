const {StatusCodes} = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err || "Something went wrong, please try again later...",
    }

    if( err.code && err.code === 11000 )
    {
        customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please enter another value.`;
        customError.statusCode = 400;
    }
    return res.status(customError.statusCode).json({msg:customError.msg});
    // return res.status(customError.statusCode).json({msg:err});
}

module.exports = errorHandlerMiddleware;