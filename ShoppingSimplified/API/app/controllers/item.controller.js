const Item = require("../models/item.model.js");

// Create and Save a new item
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a item
    const item = new Item({
      name : req.body.name,
      category_id : req.body.category_id,
      logo : req.body.logo
    });
  
    // Save item in the database
    Item.create(item, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the item."
        });
      else res.send(data);
    });
  };

// Retrieve all items from the database.
exports.findAll = (req, res) => {
    Item.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving items."
        });
      else res.send(data);
    });
  };

// Find a single item with a itemId
exports.findOne = (req, res) => {
    Item.findById(req.params.itemId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found item with id ${req.params.itemId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving item with id " + req.params.itemId
          });
        }
      } else res.send(data);
    });
  };

// Update a item identified by the itemId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Item.updateById(
      req.params.itemId,
      new Item(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found item with id ${req.params.itemId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating item with id " + req.params.itemId
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a item with the specified itemId in the request
exports.delete = (req, res) => {
    Item.remove(req.params.itemId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found item with id ${req.params.itemId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete item with id " + req.params.itemId
          });
        }
      } else res.send({ message: `item was deleted successfully!` });
    });
  };

// Delete all items from the database.
exports.deleteAll = (req, res) => {
    Item.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all items."
        });
      else res.send({ message: `All items were deleted successfully!` });
    });
  };