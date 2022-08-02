const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Please provide name."],
        maxlength: 50,
        // minlength: 3,
    },
    contact:{
        type:String,
        required:[true, "Please provide contact number."],
        match:[
            /^\+?\d{3}[- ]?\d{10}$/,
            "Please provide a valid contact info",
        ],
        unique:true,
    },
    email: {
        type:String,
        required: [true, "Please provide email"],
        match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
        ],
        unique:true,
    },
    password: {
        type:String,
        required: [true, "Please provide password"],
        minlength: 6,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true});

UserSchema.pre("save", async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
});

UserSchema.pre("findOneAndUpdate", async function(){
    if( this._update.$set.password )
    {
        const salt = await bcrypt.genSalt(10);
        this._update.$set.password = await bcrypt.hash(this._update.$set.password,salt);
    }
});

UserSchema.methods.createJWT = function () {
    return jwt.sign(
        { userId: this._id, isAdmin: this.isAdmin },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_LIFETIME,
        }
    )
};

UserSchema.methods.comparePassword = async function (candidatePass){
    const isMatch = await bcrypt.compare(candidatePass, this.password);
    return isMatch;
}

module.exports = mongoose.model("User", UserSchema);