const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError }= require("../errors");
const user = require("../models/user");

//UPDATE
const Update = async( req,res )=>{
    const {id:userId} = req.params;
    const updatedUser = await user.findByIdAndUpdate(
        userId,
        {
            $set: req.body,
        },
        { new: true, runValidators: true }
    );
    res.status(StatusCodes.OK).json(updatedUser);
};

//DELETE
const Delete = async( req,res )=>{
    await user.findOneAndDelete(req.params.id);
    res.status(StatusCodes.OK).json("User has been deleted...");
};

//GET USER
const aUser = async( req,res )=>{
    const User = await user.findById(req.params.id);
    const { password, ...others } = User._doc;
    res.status(StatusCodes.OK).json(others);
}

//GET ALL USER
const allUser = async( req,res )=>{
    const query = req.query.new;
    const users = query?await user.find().sort({_id:-1}).limit(1):await user.find();
    res.status(StatusCodes.OK).json(users);
}

//GET USER STATS
const Stats = async( req,res )=>{
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear()-1));

    const data = await user.aggregate([
        { $match: { createdAt: { $gte:lastYear }}}
        ,
        {
            $project: {
                month: {$month: "$createdAt"},
            },
        },
        {
            $group: {
                _id: "$month",
                total: {$sum: 1},
            },
        }
    ]);
    res.status(StatusCodes.OK).json(data);
}

module.exports = 
{
    Update,
    Delete,
    aUser,
    allUser,
    Stats,
};