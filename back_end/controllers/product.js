const { StatusCodes } = require("http-status-codes");
const Product = require("../models/product");

//CREATE
const addProduct = async(req,res)=>{
    const newProduct = await Product.create(req.body);
    res.status(StatusCodes.OK).json(newProduct);
}

//UPDATE
const Update = async( req,res )=>{
    const {id:productId} = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        {
            $set: req.body,
        },
        { new: true, runValidators:true }
    );
    res.status(StatusCodes.OK).json(updatedProduct);
};

//DELETE
const Delete = async( req,res )=>{
    const {id:productId} = req.params;
    await Product.findByIdAndDelete(productId);
    res.status(StatusCodes.OK).json("Product has been deleted...");
};

//GET A PRODUCT
const aProduct = async( req,res )=>{
    const {id:productId} = req.params;
    const product = await Product.findById(productId);
    res.status(StatusCodes.OK).json(product);
}

//GET ALL PRODUCTS 
const allProduct = async( req,res )=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;

    let products;
    if(qNew)
    {
        products = await Product.find().sort({ createdAt:-1}).limit(1);
    }
    else if(qCategory)
    {
        products = await Product.find({
            categories: {$in:[qCategory]},
        });
    }
    else
    {
        products = await Product.find();
    }
    res.status(StatusCodes.OK).json(products);
}

module.exports = 
{
    Update,
    Delete,
    aProduct,
    allProduct,
    addProduct,
};