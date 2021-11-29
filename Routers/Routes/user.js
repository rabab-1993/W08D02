const express = require("express");
const userRouter = express.Router();

const {register, logIn} = require('../Controllers/user')


userRouter.post("/", register);
userRouter.post("/login", logIn);




module.exports = userRouter;