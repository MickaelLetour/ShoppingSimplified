module.exports = app => {
    const list_item = require("../controllers/list_item.controller.js");
  
    // Create a new user
    app.post("/list_item", list_item.create);
 
    // Retrieve all users
    app.get("/list_item", list_item.findAll);
  
    // Retrieve all items of list
    app.get("/list_item/listing=/:listId", list_item.findList);

    // Retrieve a single group with groupId
    app.get("/list_item/itemoverload=/:itemId", list_item.findItem);
 
    // Delete a user with userId
    app.delete("/list_item/:listId&:itemId", list_item.delete);
  
     // Create a new user
    app.delete("/list_item/delall", list_item.deleteAll); 

    // Update a user with userId
    app.put("/list_item/uping=/:listId&:itemId", list_item.update);

  };