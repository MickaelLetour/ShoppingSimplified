module.exports = app => {
    const withAuth = require("./middleware");
    const lists = require("../controllers/list.controller.js");
  
    // Create a new list
    app.post("/lists", withAuth,lists.create);
  
    // Retrieve all lists
    app.get("/lists", withAuth,lists.findAll);
  
    // Retrieve a single list with listId
    app.get("/lists/:listId", withAuth,lists.findOne);
  
    // Update a list with listId
    app.put("/lists/:listId", withAuth,lists.update);
  
    // Delete a list with listId
    app.delete("/lists/:listId", withAuth,lists.delete);
  
    // Create a new list
    app.delete("/lists", withAuth,lists.deleteAll);
  };