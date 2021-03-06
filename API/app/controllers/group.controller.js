const Group = require("../models/group.model.js");

// Create and Save a new Group
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a group
    const group = new Group({ 
      group_name : req.body.group_name,
      n_members : req.body.n_members,   //save informations necessary for the request on a const
      active : req.body.active,
      logo: req.body.logo,
    });

    // Save group in the database
    Group.create(group, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the group."
        });
      else res.send(data);
    });
  };

// Retrieve all groups from the database.
exports.findAll = (req, res) => {
    Group.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving groups."
        });
      else res.send(data);
    });
  };

// Find a single group with a groupId
exports.findOne = (req, res) => {
    Group.findById(req.params.groupId, (err, data) => {
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

// Update a group identified by the groupId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Group.updateById(
      req.params.groupId,
      new Group(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found group with id ${req.params.groupId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updatinggroup with id " + req.params.groupId
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a group with the specified groupId in the request
exports.delete = (req, res) => {
    Group.remove(req.params.groupId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found group with id ${req.params.groupId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete group with id " + req.params.groupId
          });
        }
      } else res.send({ message: `group was deleted successfully!` });
    });
  };

// Delete all groups from the database.
exports.deleteAll = (req, res) => {
    Group.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all groups."
        });
      else res.send({ message: `All groups were deleted successfully!` });
    });
  };