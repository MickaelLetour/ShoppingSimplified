module.exports = app => {
    const lists = require("../controllers/list.controller.js");
  
    // Create a new list
    app.post("/lists", lists.create);
  
    // Retrieve all lists
    app.get("/lists", lists.findAll);

    // Retrieve last list
    app.get("/last/lists", lists.findLast);
  
    // Retrieve a single list with listId
    app.get("/lists/:listId", lists.findOne);

    // Retrieve all Lists that belong to a group
    app.get("/lists/groups/:groupid", lists.findGroupLists);
  
    // Update a list with listId
    app.put("/lists/:listId", lists.update);

    // Update a list with listId
    app.put("/lists/Active/:listId", lists.updateActive);
  
    // Delete a list with listId
    app.delete("/lists/:listId", lists.delete);
  
    // Create a new list
    app.delete("/lists", lists.deleteAll);
  };