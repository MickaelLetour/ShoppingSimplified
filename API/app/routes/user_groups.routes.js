module.exports = app => {
    const user_groups = require("../controllers/user_groups.controller.js");
  
    // Create a new user
    app.post("/user_groups", user_groups.create);
  
    // Retrieve all users
    app.get("/user_groups", user_groups.findAll);
  
    // Retrieve a single user with userId
    app.get("/user_groups/:userId", user_groups.findOneUserinGroups);

    // Retrieve a single user with userId
    app.get("/user_groups/:groupId", user_groups.findOneGroupofUsers);
    

    // Delete a user with userId
    app.delete("/user_groups/:userId:groupid", user_groups.delete);
  
    // Create a new user
    app.delete("/user_groups", user_groups.deleteAll);
  };