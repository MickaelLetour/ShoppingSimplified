module.exports = app => {
    const withAuth = require("./middleware");
    const user_groups = require("../controllers/user_groups.controller.js");
  
    // Create a new user
    app.post("/user_groups", withAuth,user_groups.create);
 
    // Retrieve all users
    app.get("/user_groups", withAuth,user_groups.findAll);
  
    // Retrieve a single user with userId
    app.get("/user_groups/userpower=/:userId", withAuth,user_groups.findOneUserinGroups);

    // Retrieve a single group with groupId
    app.get("/user_groups/powerinnumbers=/:groupId", withAuth,user_groups.findOneGroupofUsers);
 
    // Delete a user with userId
    app.delete("/user_groups/:userId&:groupId",withAuth, user_groups.delete);
  
     // Create a new user
    app.delete("/user_groups/delall", withAuth,user_groups.deleteAll); 
  };