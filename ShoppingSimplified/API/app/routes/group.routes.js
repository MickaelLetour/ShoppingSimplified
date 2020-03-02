module.exports = app => {
    const groups = require("../controllers/group.controller.js");//import function of controllers
  
    // Create a new group
    app.post("/groups", groups.create);//route for create a group
  
    // Retrieve all groups
    app.get("/groups", groups.findAll);//route for get all groups
  
    // Retrieve a single group with groupId
    app.get("/groups/:groupId", groups.findOne);//route for get a group with an id
  
    // Update a group with userId
    app.put("/groups/:groupId", groups.update);//route for update a group with an id
  
    // Delete a group with userId
    app.delete("/groups/:groupId", groups.delete);//route for delete a group with an id
  
    // Create a new user
    app.delete("/groups", groups.deleteAll);//route for delete all groups
  };