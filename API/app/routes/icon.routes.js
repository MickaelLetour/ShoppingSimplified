module.exports = app => {
    const icons = require("../controllers/icon.controller.js");//import function of controllers
  
    // Create a new user
    app.post("/icons", icons.create);//route for create a new icon
  
    // Retrieve all users
    app.get("/icons", icons.findAll);//route for get all icons
  
    // Retrieve a single user with userId
    app.get("/icons/:iconId", icons.findOne);

    app.get("/iconsNotUsed", icons.findAllWithInfo);//route for get all icons not used by a item
  
    // Update a user with userId
    app.put("/icons/:iconId", icons.update);//
  
    // Delete a user with userId
    app.delete("/icons/:iconId", icons.delete);
  
    // Create a new user
    app.delete("/icons", icons.deleteAll);
  };