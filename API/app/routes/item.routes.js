module.exports = app => {
    const withAuth = require("./middleware");
    const items = require("../controllers/item.controller.js");
  
    // Create a new item
    app.post("/items", withAuth,items.create);
  
    // Retrieve all items
    app.get("/items", withAuth,items.findAll);
  
    // Retrieve a single item with itemId
    app.get("/items/:itemId", withAuth,items.findOne);
  
    // Update a item with itemId
    app.put("/items/:itemId", withAuth,items.update);
  
    // Delete a item with itemId
    app.delete("/items/:itemId",withAuth,items.delete);
  
    // Create a new item
    app.delete("/items", withAuth,items.deleteAll);
  };