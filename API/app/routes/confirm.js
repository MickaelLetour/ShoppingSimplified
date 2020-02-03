module.exports = app => {
    const users = require("../controllers/user.controller.js");

app.get("/confirm/:token", users.updateByToken);

Location: 'http://http://localhost:21012//';
 
};