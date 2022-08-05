const Order = require("../models/order");
const { StatusCodes } = require("http-status-codes");

//CREATE
const addOrder = async(req,res)=>{
    const newOrder = await Order.create(req.body);
    res.status(StatusCodes.OK).json(newOrder);
};


//UPDATE
const Update = async(req,res)=>{
    const {id:userId} = req.params;
    const updatedOrder = await Order.findOneAndUpdate(
        { userId: userId },
        {
            $set: req.body,
        },
        { new: true, runValidators:true }
    );
    res.status(StatusCodes.OK).json(updatedOrder);
};

//DELETE
const Delete = async( req,res )=>{
    const {id:userId} = req.params;
    await Order.findOneAndDelete({userId:userId});
    res.status(StatusCodes.OK).json("Order has been deleted...");
};

//GET USER ORDER
const aOrder = async( req,res )=>{
    const {id:userId} = req.params;
    const order = await Order.findOne({userId:userId});
    res.status(StatusCodes.OK).json(order);
}

//GET ALL ORDERS
const allOrder = async( req,res )=>{
    const orders = await Order.find();
    res.status(StatusCodes.OK).json(orders);
}


module.exports = 
{
    Update,
    Delete,
    aOrder,
    allOrder,
    addOrder,
}
