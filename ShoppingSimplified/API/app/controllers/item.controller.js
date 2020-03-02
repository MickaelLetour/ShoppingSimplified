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
      category_id : req.body.category_id, //save informations necessary for the request on a const
      icon_id : req.body.icon_id,
      name_item : req.body.name
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

exports.findWithInfo = (req, res) => {
    Item.getAllWithJoin((err, data) => {
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

  exports.findOneWithInfo = (req, res) => {
    Item.findByIdWithInfo(req.params.itemId, (err, data) => {
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
    const item = new Item({
      category_id : req.body.category_id,
      icon_id : req.body.icon_id,
      name_item : req.body.name
    });
  
    Item.updateById(
      req.params.itemId,
      item,
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
      } else {
        res.redirect("http://localhost:21012/ShopList/Items");
      }
    });
  };

// Delete all items from the database.
/* exports.deleteAll = (req, res) => {
    Item.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all items."
        });
      else res.send({ message: `All items were deleted successfully!` });
    });
  }; */