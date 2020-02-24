module.exports = app => {
    const list_item = require("../controllers/list_item.controller.js");
  
    // Create a list_item
    app.post("/list_item", list_item.create); //rout for list_item creation
 
    // Retrieve all list_items
    app.get("/list_item", list_item.findAll); //rout for list_item listing
  
    // Retrieve all items of a list
    app.get("/list_item/listing=/:listId", list_item.findList); //route for items belonging to list

    // Retrieve all lists that the identified item belongs to
    app.get("/list_item/itemoverload=/:itemId", list_item.findItem); //route to retrive lists were item exists
 
    // Delete a item with from a list
    app.delete("/list_item/:listId&:itemId", list_item.delete); //route to list and item delete
  
     // Delete all lists
    app.delete("/list_item/delall", list_item.deleteAll); 

    // Update a item status in list
    app.put("/list_item/uping=/:listId&:itemId", list_item.update); //route to list item status

  };