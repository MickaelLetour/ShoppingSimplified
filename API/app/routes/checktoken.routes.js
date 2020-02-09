module.exports = app => {
    const withAuth = require("./middleware");

app.get('/checkToken', withAuth, function(req, res) { 
    res.send(200); 
  })
};