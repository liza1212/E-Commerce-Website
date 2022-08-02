const { StatusCodes } = require("http-status-codes");
const { UnauthenticatedError, ForbiddenError } = require("../errors");
const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) => {
    // const authHeader = req.headers.token;
    const authHeader = req.headers.authorization;
    if( !authHeader || !authHeader.startsWith("Bearer ")) 
    {
        throw new UnauthenticatedError("Authentication Invalid!!!");
    }

    const Token = authHeader.split(' ')[1];
    jwt.verify( Token, process.env.JWT_SECRET, (err,payload)=>{
        if(err)
        {
            throw new UnauthenticatedError("Authentication Invalid!!!");
        }
        req.user = {id:payload.userId, isAdmin:payload.isAdmin};
        next();
    });
};

const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if (req.user.id === req.params.id || req.user.isAdmin)
        {
            next();
        }
        else
        {
            throw new ForbiddenError("You are not allowed to perform the action!!!");
        }
    });
};

const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin)
        {
            next();
        }
        else
        {
            throw new ForbiddenError("You are not allowed to perform the action!!!");
        }
    });
};

module.exports = 
{
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
};