const express= require("express");

const app= express();

const dotenv=require("dotenv");

const userRoute=require("./routes/user")
const authRoute=require("./routes/auth")
dotenv.config();

const mongoose=require("mongoose");

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("DB Connection Succesfull"))
    .catch((err) =>{
        console.log(err);
    });
app.use(express.json());
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);

    app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running");
})

