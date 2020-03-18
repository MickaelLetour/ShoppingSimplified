module.exports = app => {
    const categories = require("../controllers/category.controller.js");//import function of controllers
  
    // Create a new category
    app.post("/categories", categories.create);//route for create a category
  
    // Retrieve all categories
    app.get("/categories", categories.findAll);//route for get all categories
  
    // Retrieve a single category with categoryId
    app.get("/categories/:categoryId", categories.findOne);//route for get a category with an id
  
    // Update a category with categoryId
    app.put("/categories/:categoryId", categories.update);//route for update a category
  
    // Delete a category with categoryId
    app.delete("/categories/:categoryId", categories.delete);//route for delete a category with an id
  
    // Create a new category
    app.delete("/categories", categories.deleteAll);//route for delete all categories
  };