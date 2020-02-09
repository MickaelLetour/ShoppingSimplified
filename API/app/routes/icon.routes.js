module.exports = app => {
    const withAuth = require("./middleware");
    const icons = require("../controllers/icon.controller.js");
  
    // Create a new user
    app.post("/icons",withAuth, icons.create);
  
    // Retrieve all users
    app.get("/icons",withAuth, icons.findAll);
  
    // Retrieve a single user with userId
    app.get("/icons/:iconId", withAuth,icons.findOne);
  
    // Update a user with userId
    app.put("/icons/:iconId",withAuth, icons.update);
  
    // Delete a user with userId
    app.delete("/icons/:iconId",withAuth,icons.delete);
  
    // Create a new user
    app.delete("/icons",withAuth, icons.deleteAll);
  };