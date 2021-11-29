const userModel = require('../../db/model/user');
const dotenv = require("dotenv"); 
dotenv.config();

const jwt = require("jsonwebtoken");
const SECRETKEY = process.env.SECRETKEY;

//bcrypt > library to hash passwords.
const bcrypt = require("bcrypt");
const SALT = Number(process.env.SALT);

// Register function
const register = async (req, res) => {
const { email, password, role} = req.body;
const savePass = await bcrypt.hash(password, SALT);
​
    const creatUser = new userModel({
        email,
        password: savePass,
        role
    });

    creatUser
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });  
}


// LogIn function

// const logIn = (req, res) => {

// }

module.exports = {register};