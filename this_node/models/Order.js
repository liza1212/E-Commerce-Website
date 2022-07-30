
const mongoose=required("mongoose")

const OrderSchema= new mongoose.Schema(
    {
        userId:{type: String, unique: true},
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
        amount:{type: Number, required: true},
        address: {type: Object, required:true},
        statur: {type: String, default: "pending"},
    },
    {timestamps: true}
);

module.exports=mongoose.model("User", OrderSchema);