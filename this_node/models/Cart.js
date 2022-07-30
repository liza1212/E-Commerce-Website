const mongoose=required("mongoose")

const CartSchema= new mongoose.Schema(
    {
        userId:{type: String,unique: true},
        products: [
            {
                productId:{
                    type: String
                },
                Quantity:{
                    type:Number,
                    default:1,
                },
            },
        ],
    },
    {timestamps: true}
);

module.exports=mongoose.model("User", CartSchema);