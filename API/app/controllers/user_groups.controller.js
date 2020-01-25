const User_Groups = require("../models/user_groups.model.js");

// Create and Save a new user
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a user
    const user_groups = new User_Groups({
      id_User : req.body.id_User,
      id_Group : req.body.id_Group,
    });
  
    // Save user in the database
    User_Groups.create(user_groups, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user_groups."
        });
      else res.send(data);
    });
  };

// Retrieve all user_groups from the database.
exports.findAll = (req, res) => {
    User_Groups.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving user_groups."
        });
      else res.send(data);
    });
  };

// Find a single user with a userId
exports.findOneUserinGroups = (req, res) => {
    User_Groups.findUserGById(req.params.userId, (err, data) => {
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

exports.findOneGroupofUsers = (req, res) => {
User_Groups.findGroupById(req.params.groupId, (err, data) => {
    if (err) {
    if (err.kind === "not_found") {
        res.status(404).send({
        message: `Not found group with id ${req.params.groupId}.`
        });
    } else {
        res.status(500).send({
        message: "Error retrieving group with id " + req.params.groupId
        });
    }
    } else res.send(data);
});
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    User_Groups.removeGuser(req.params.userId,req.params.groupId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found user with id ${req.params.userId} and group with id ${req.params.groupId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete user with id " + req.params.userId +  " and group id "+req.params.groupId
          });
        }
      } else res.send({ message: `user_groups was deleted successfully!` });
    });
  };

// Delete all users from the database.
exports.deleteAll = (req, res) => {
    User_Groups.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all user_groups."
        });
      else res.send({ message: `All user_groups were deleted successfully!` });
    });
  };