module.exports = app => {
    const withAuth = require("./middleware");
    const groups = require("../controllers/group.controller.js");
  
    // Create a new user
    app.post("/groups", withAuth,groups.create);
  
    // Retrieve all users
    app.get("/groups",withAuth,groups.findAll);
  
    // Retrieve a single user with userId
    app.get("/groups/:groupId",withAuth, groups.findOne);
  
    // Update a user with userId
    app.put("/groups/:groupId",withAuth, groups.update);
  
    // Delete a user with userId
    app.delete("/groups/:groupId",withAuth, groups.delete);
  
    // Create a new user
    app.delete("/groups",withAuth, groups.deleteAll);
  };