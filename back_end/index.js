require("dotenv").config();
require("express-async-errors");

//external packages
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");
//express app
const express = require("express");
const app = express();
//database connection
const connectDB = require("./database/connect");
//router 
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
//error handling middlewares
const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");



//for security  
app.use(
    rateLimiter({
        windowMs: 15*60*1000,
        max:100,
    })
);
app.use(express.json());
app.use(helmet());
app.use(xss());


//routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);


//error handlers
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



//port 
const port = process.env.PORT || 5000;



//connection to the database
const start = async() => {
    try {
        await connectDB(process.env.DB_URI);
        app.listen(port, console.log(`Server is listening to ${port}`));
    } catch (error) {
        console.log(error); 
    }
};
start();