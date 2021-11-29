const express = require("express");
const dotenv = require("dotenv"); 
dotenv.config();

const mongoose = require("mongoose");
const app = express()

const userRouter = require('./Routers/Routes/user');
app.use("/register", userRouter)


app.use(express.json())

const PORT = process.env.PORT || 5300;


// imported the db file
require("./db/index")





app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})