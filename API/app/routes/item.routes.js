module.exports = app => {
    const items = require("../controllers/item.controller.js");
  
    // Create a new item
    app.post("/items", items.create);
  
    // Retrieve all items
    app.get("/items", items.findAll);
  
    // Retrieve a single item with itemId
    app.get("/items/:itemId", items.findOne);

    //retrieve all items and their informations related
    app.get("/itemsInfo", items.findWithInfo)

    //retrieve a item and his information with itemid 
    app.get("/itemsInfo/:itemId", items.findOneWithInfo);
  
    // Update a item with itemId
    app.put("/items/:itemId", items.update);
  
    // Delete a item with itemId
    app.delete("/items/:itemId", items.delete);

    // delete all items 
    /* app.delete("/items", items.deleteAll); */
  };