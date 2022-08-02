const { StatusCodes } = require("http-status-codes");
const Cart = require("../models/cart");

//CREATE
const addCart = async(req,res)=>{
    const newCart = await Cart.create(req.body);
    res.status(StatusCodes.OK).json(newCart);
}

//UPDATE
const Update = async( req,res )=>{
    const {id:userId} = req.params;
    const updatedCart = await Cart.findOneAndUpdate(
        { userId: userId },
        {
            $set: req.body,
        },
        { new: true, runValidators:true }
    );
    res.status(StatusCodes.OK).json(updatedCart);
};

//DELETE
const Delete = async( req,res )=>{
    const {id:userId} = req.params;
    await Cart.findOneAndDelete({userId:userId});
    res.status(StatusCodes.OK).json("Cart has been deleted...");
};

//GET USER CART
const aCart = async( req,res )=>{
    const {id:userId} = req.params;
    const cart = await Cart.findOne({userId:userId});
    res.status(StatusCodes.OK).json(cart);
}

//GET ALL CARTS 
const allCart = async( req,res )=>{
    const carts = await Cart.find(); 
    res.status(StatusCodes.OK).json(carts);
}

module.exports = 
{
    Update,
    Delete,
    aCart,
    allCart,
    addCart,
};