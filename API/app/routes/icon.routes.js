module.exports = app => {
    const icons = require("../controllers/icon.controller.js");
  
    // Create a new user
    app.post("/icons", icons.create);
  
    // Retrieve all users
    app.get("/icons", icons.findAll);
  
    // Retrieve a single user with userId
    app.get("/icons/:iconId", icons.findOne);
  
    // Update a user with userId
    app.put("/icons/:iconId", icons.update);
  
    // Delete a user with userId
    app.delete("/icons/:iconId", icons.delete);
  
    // Create a new user
    app.delete("/icons", icons.deleteAll);
  };