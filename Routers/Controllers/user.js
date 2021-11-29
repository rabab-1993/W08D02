const userModel = require('../../db/model/user');
const dotenv = require("dotenv"); 
dotenv.config();




// Register function
const register = (req, res) => {

    const creatUser = new userModel({
        email,
        password,
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

