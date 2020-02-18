const Category = require("../models/category.model.js");

// Create and Save a new category
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({//file not exist
        message: "Content can not be empty!"
      });
    }
  
    // Create a category
    const category = new Category({ //save informations necessary for the request on a const
      name : req.body.name
    });
  
    // Save category in the database
    Category.create(category, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the category."
        });
      else res.send(data);
    });
  };

// Retrieve all categories from the database.
exports.findAll = (req, res) => {
    Category.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving categories."
        });
      else res.send(data);
    });
  };

// Find a single category with a categoryId
exports.findOne = (req, res) => {
    Category.findById(req.params.categoryId, (err, data) => {//need id like parameter
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found category with id ${req.params.categoryId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving category with id " + req.params.categoryId
          });
        }
      } else res.send(data);
    });
  };

// Update a category identified by the categoryId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Category.updateById(
      req.params.categoryId,
      new Category(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found category with id ${req.params.categoryId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating category with id " + req.params.categoryId
            });
          }
        } else res.send(data);
      }
    );
};

// Delete a category with the specified categoryId in the request
exports.delete = (req, res) => {
    Category.remove(req.params.categoryId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found category with id ${req.params.categoryId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete category with id " + req.params.categoryId
          });
        }
      } else res.send({ message: `category was deleted successfully!` });
    });
  };

// Delete all categories from the database.
exports.deleteAll = (req, res) => {
    Category.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all categories."
        });
      else res.send({ message: `All categories were deleted successfully!` });
    });
  };