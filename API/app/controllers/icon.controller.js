const Icon = require("../models/icon.model.js");

// Create and Save a new icon
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a icon
    const icon = new Icon({ //save informations necessary for the request on a const
      icon : req.body.icon,
      name : req.body.name
    });
  
    // Save icon in the database
    Icon.create(icon, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the icon."
        });
      else res.send(data);
    });
  };

// Retrieve all icons from the database.
exports.findAll = (req, res) => {
    Icon.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving icons."
        });
      else res.send(data);
    });
  };

exports.findAllWithInfo = (req, res) => {
    Icon.getNotUsed((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving icons."
        });
      else res.send(data);
    });
  };
  
// Find a single icon with a iconId
exports.findOne = (req, res) => {
    Icon.findById(req.params.iconId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found icon with id ${req.params.iconId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving icon with id " + req.params.iconId
          });
        }
      } else res.send(data);
    });
  };

// Update a icon identified by the iconId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Icon.updateById(
      req.params.iconId,
      new Icon(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found icon with id ${req.params.iconId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating icon with id " + req.params.iconId
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a icon with the specified iconId in the request
exports.delete = (req, res) => {
    Icon.remove(req.params.iconId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found icon with id ${req.params.iconId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete icon with id " + req.params.iconId
          });
        }
      } else res.send({ message: `icon was deleted successfully!` });
    });
  };

// Delete all icons from the database.
exports.deleteAll = (req, res) => {
    Icon.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all icons."
        });
      else res.send({ message: `All icons were deleted successfully!` });
    });
  };