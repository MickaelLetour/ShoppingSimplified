module.exports = app => {
    const icons = require("../controllers/icon.controller.js");//import function of controllers
  
    // Create a new icon
    app.post("/icons", icons.create);//route for create a new icon
  
    // Retrieve all icons
    app.get("/icons", icons.findAll);//route for get all icons
  
    // Retrieve a single icon with iconId
    app.get("/icons/:iconId", icons.findOne);

    app.get("/iconsNotUsed", icons.findAllWithInfo);//route for get all icons not used by a item
  
    // Update a icon with iconId
    app.put("/icons/:iconId", icons.update);//
  
    // Delete a icon with iconId
    app.delete("/icons/:iconId", icons.delete);
  
    // Create a new icon
    app.delete("/icons", icons.deleteAll);
  };