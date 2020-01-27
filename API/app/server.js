const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ShoppingSimplified application." });
});

require("./routes/user.routes.js")(app);
require("./routes/category.routes.js")(app);
require("./routes/icon.routes.js")(app);
require("./routes/group.routes.js")(app);
require("./routes/user_groups.routes.js")(app);
require("./routes/list_item.routes.js")(app);

// set port, listen for requests
app.listen(2112, () => {
  console.log("Server is running on port 2112.");
});

