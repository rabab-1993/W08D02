const express = require("express");
const userRouter = express.Router();

const {register} = require('../Controllers/user')


userRouter.post("/register", register);



module.exports = userRouter;