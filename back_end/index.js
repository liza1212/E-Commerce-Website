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


//router 



//using middleware
app.use(
    rateLimiter({
        windowMs: 15*60*1000,
        max:100,
    })
);

app.use(helmet());
app.use(xss());

//port 
const port = process.env.PORT || 5000;

const start = async() => {
    try {
        app.listen(port, console.log(`Server is listening to ${port}`));
    } catch (error) {
        console.log(error); 
    }
};

start();