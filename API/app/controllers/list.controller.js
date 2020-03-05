const List = require("../models/list.model.js");

// Create and Save a new list
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a list
    const list = new List({
      group_id : req.body.group_id,  //save informations necessary for the request on a const
      name : req.body.name,
      active : req.body.active
    });
  
    // Save list in the database
    List.create(list, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the list."
        });
      else res.send(data);
    });
  };

// Retrieve all lists from the database.
exports.findAll = (req, res) => {
    List.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving lists."
        });
      else res.send(data);
    });
  };

  //find last list added
  exports.findLast = (req, res) => {
    List.lastAdded((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving lists."
        });
      else res.send(data);
    });
  };

// Find a single list with a listId
exports.findOne = (req, res) => {
    List.findById(req.params.listId, (err, data) => {
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

//Find all lists belonging to a group
  exports.findGroupLists = (req, res) => {
    List.listByGroupId(req.params.groupid, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.send(false) //returns false if does not find any
        } else {
          res.status(500).send({
            message: "Error retrieving list with id " + req.params.listId
          });
        }
      } else res.send(data);
    });
  };


// Update a list identified by the listId in the request
exports.update = (req, res) => { //opens update function with the request qnd response pqrqmeters
    // Validate Request
    if (!req.body) { //if the request.body is empty
      res.status(400).send({ //sends error
        message: "Content can not be empty!"
      });
    }
  
    List.updateById( //opens model function
      req.params.listId, //sends requested list id as parameter
      new List(req.body), //builds and sends the body of the list as a object
      (err, data) => { //returns error if any and the response
        if (err) { //if there was an error
          if (err.kind === "not_found") { //returns error depending on it's tipe
            res.status(404).send({
              message: `Not found list with id ${req.params.listId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating list with id " + req.params.listId
            });
          }
        } else res.send(data); //returns request response to App
      }
    );
  };



  // Update a list identified by the listId in the request
exports.updateActive = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  List.updateActiveById(
    req.params.listId,
    new List(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found list with id ${req.params.listId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating list with id " + req.params.listId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a list with the specified listId in the request
exports.delete = (req, res) => {
    List.remove(req.params.listId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found list with id ${req.params.listId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete list with id " + req.params.listId
          });
        }
      } else res.send({ message: `list was deleted successfully!` });
    });
  };

// Delete all lists from the database.
exports.deleteAll = (req, res) => {
    List.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all lists."
        });
      else res.send({ message: `All lists were deleted successfully!` });
    });
  };