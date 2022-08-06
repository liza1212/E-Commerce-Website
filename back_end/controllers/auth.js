const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
    const user = await User.create(req.body);
    const token = user.createJWT();
    const { password, ...others } = user._doc;
    res.status(StatusCodes.CREATED).json({ ...others, token });
}

const login = async (req, res) => {
    // const { email, password } = req.body;

    if( !req.body.email || !req.body.password )
    {
        throw new BadRequestError("Please provide email and password");
    }
    const user = await User.findOne({email:req.body.email});
    if(!user)
    {
        throw new UnauthenticatedError("Invalid Credentials!!!");
    }

    const isPasswordCorrect = await user.comparePassword(req.body.password);
    if (!isPasswordCorrect)
    {
        throw new UnauthenticatedError("Invalid Credentials!!!");
    }

    const token = user.createJWT();
    const { password, ...others } = user._doc;
    res.status(StatusCodes.OK).json({ ...others, token});
    // res.status(200).send('Welcome to the login page');
}

module.exports = {
    register, 
    login,
}