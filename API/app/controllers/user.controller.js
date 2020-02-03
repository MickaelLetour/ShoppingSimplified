const User = require("../models/user.model.js");
var passwordHash = require ('password-hash');
const nodemailer = require("nodemailer");
var jwtUtils = require('../utils/jwt.utils');


// Create and Save a new user
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a user
    const user = new User({
      nickname : req.body.nickname,
      password : req.body.password,
      email: req.body.email,
      photo: req.body.photo,
      active : 0,
      temporaryToken : jwtUtils.generateTokenForUser(req.body.nickname)
    });

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mickael.letour@gmail.com',
        pass:'Ellhaym131214'
      }
    });

    var mailOptions = {
      from : 'mickael.letour@gmail.com',
      to : 'ideldridge@hotmail.fr',
      subject: 'test sending email with node js',
      text : 'http://localhost:2112/confirm/'+user.temporaryToken
    };

    transporter.sendMail(mailOptions, function (err, info){
      if (err) {
        console.log(err);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    // Save user in the database
    User.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });

      else  
        res.send(data)
    })
  };



// Retrieve all users from the database.
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      else
        {
          console.log(data);
          let row=data[6];




          res.send(data);
        }                                                                                                           
        
    });
  };

/* exports.verifyUser = (req,res)=> {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    else 
    //console.log(res.password);
    //res.send(data);
  //});
} */

// Find a single user with a userId
exports.findOne = (req, res) => {
    User.findById(req.params.userId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found user with id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving user with id " + req.params.userId
          });
        }
      } else res.send(data);
    });
  };
  

exports.updateByToken = (req, res) => {

  if(!req.params.token){
    res.status(400).send({
      message: "Content can not be empty!" + req.params.token
    });
  }
  User.updateByToken(req.params.token,(err,data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found user with this token ${req.params.token}`
          });
        } else {
          res.status(500).send({
            message: "Error updating user with this token " + req.params.token
          });
        }
      } else res.send(data);
    }
  );
};
  

   exports.VerifyPassword = (req, res)=> {
    User.getPwByNick(req.params.userNick, (err, data) =>{
        //let value=req.params.userPass.slice(0,-1);
        //console.log(data);
        if(data==null) 
            res.send(false);

        else {
          if(passwordHash.verify(req.params.userPass, data.password)===true){
           /*  console.log(req.params.userPass);
            console.log(data.password); */
            
            res.send(true);
          }
          else {
            res.send(false);
          }
      } 
    });
  } 

// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    User.updateById(
      req.params.userId,
      new User(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found user with id ${req.params.userId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating user with id " + req.params.userId
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    User.remove(req.params.userId,req.params.groupId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found user with id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
          });
        }
      } else res.send({ message: `user was deleted successfully!` });
    });
  };

// Delete all users from the database.
exports.deleteAll = (req, res) => {
    User.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all users."
        });
      else res.send({ message: `All users were deleted successfully!` });
    });
  };