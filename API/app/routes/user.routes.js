module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    // Create a new user
    app.post("/users", users.create);

    app.post("/users/forgot/", users.forgot);
  
    // Retrieve all users
    app.get("/users", users.findAll);

    // Retrieve a single user with userId
    app.get("/users/:userId", users.findOne);

    // Update a user with userId
    app.put("/users/:userId", users.update);
  
    // Delete a user with userId
    app.delete("/users/:userId", users.delete);
  
    // Create a new user
    app.delete("/users", users.deleteAll);

    app.get("/users/pass/:userNick&:userPass", users.VerifyPassword);

    app.get("/confirm/:token", users.updateByToken);

    app.get("/forgot/:token", users.forgotUpdate);

    app.post("/forgot/update/", users.updatePassword);

  };