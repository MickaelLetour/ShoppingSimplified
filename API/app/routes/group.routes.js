module.exports = app => {
    const groups = require("../controllers/group.controller.js");//import function of controllers
  
    // Create a new user
    app.post("/groups", groups.create);//route for create a group
  
    // Retrieve all users
    app.get("/groups", groups.findAll);//route for get all groups
  
    // Retrieve a single user with userId
    app.get("/groups/:groupId", groups.findOne);//route for get a group with an id
  
    // Update a user with userId
    app.put("/groups/:groupId", groups.update);//route for update a group with an id
  
    // Delete a user with userId
    app.delete("/groups/:groupId", groups.delete);//route for delete a group with an id
  
    // Create a new user
    app.delete("/groups", groups.deleteAll);//route for delete all groups
  };