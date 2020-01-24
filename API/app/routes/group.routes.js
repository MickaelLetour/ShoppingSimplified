module.exports = app => {
    const groups = require("../controllers/group.controller.js");
  
    // Create a new user
    app.post("/groups", groups.create);
  
    // Retrieve all users
    app.get("/groupss", groups.findAll);
  
    // Retrieve a single user with userId
    app.get("/groups/:groupId", groups.findOne);
  
    // Update a user with userId
    app.put("/groups/:groupId", groups.update);
  
    // Delete a user with userId
    app.delete("/groups/:groupId", groups.delete);
  
    // Create a new user
    app.delete("/groups", groups.deleteAll);
  };