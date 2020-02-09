const List_Item = require("../models/list_item.model.js");

// Create and Save a new user
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a conection
    const list_item = new List_Item({
      id_List : req.body.id_List,
      id_Item : req.body.id_Item,
      quantity : req.body.quantity,
      status : req.body.status,
    });
  
    // Save user in the database
    List_Item.create(list_item, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the list_item."
        });
      else res.send(data);
    });
  };

// Retrieve all user_groups from the database.
exports.findAll = (req, res) => {
    List_Item.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving list_item."
        });
      else res.send(data);
    });
  };

// Find a single user with a userId
exports.findList = (req, res) => {
    List_Item.findListById(req.params.listId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found list with id ${req.params.listId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving list with id " + req.params.listId
          });
        }
      } else res.send(data);
    });
  };

exports.findItem = (req, res) => {
List_Item.findItemById(req.params.itemId, (err, data) => {
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

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    List_Item.removeItemFromList(req.params.listId, req.params.itemId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found list with id ${req.params.listId} and item with id ${req.params.itemId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete list with id " + req.params.listId +  " and item id "+req.params.itemId
          });
        }
      } else res.send({ message: `list_item was deleted successfully!` });
    });
  };

// Delete all users from the database.
exports.deleteAll = (req, res) => {
    List_Item.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all List_items."
        });
      else res.send({ message: `All list_items were deleted successfully!` });
    });
  };


  // Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    List_Item.updateDataByIds(
      req.params.listId, req.params.itemId,
      new List_Item(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found List with id ${req.params.listId} and Item with id ${req.params.itemId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating list with id " + req.params.listId + "and item" + req.params.itemId
            });
          }
        } else res.send(data);
      }
    );
  };