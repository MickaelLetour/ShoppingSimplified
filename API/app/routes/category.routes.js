module.exports = app => {
    const withAuth = require("./middleware");
    const categories = require("../controllers/category.controller.js");
  
    // Create a new category
    app.post("/categories",withAuth, categories.create);
  
    // Retrieve all categories
    app.get("/categories", withAuth,categories.findAll);
  
    // Retrieve a single category with categoryId
    app.get("/categories/:categoryId", withAuth,categories.findOne);
  
    // Update a category with categoryId
    app.put("/categories/:categoryId", withAuth,categories.update);
  
    // Delete a category with categoryId
    app.delete("/categories/:categoryId", withAuth,categories.delete);
  
    // Create a new category
    app.delete("/categories", withAuth,categories.deleteAll);
  };