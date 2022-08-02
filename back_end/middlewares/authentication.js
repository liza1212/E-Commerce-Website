const {UnauthenticatedError} = require("../errors");

const auth = async(req,res,next) => {
    const authHeader = req.headers.authorization;
    if( !authHeader || !authHeader.startsWith("Bearer ")) 
    {
        throw new UnauthenticatedError("Authentication Invalid!!!");
    }

    const token = authHeader.split(' ')[1];

    try {
        //verify token
        req.user = {userId:userid, name:username};
        next();
    } catch (error) {
        throw new UnauthenticatedError("Authentication Invalid!!!");
    }
}

module.exports = auth;