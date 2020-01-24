var mysql = require('mysql');

let build = mysql.createConnection({
  host: "localhost",
  user: "RGML",
  password: "12121312",
  //database: "ShoppingSimplified"
});

build.connect(function(err) {
    let sql;
    if (err) throw err;
    console.log("Connected!");
    build.query("CREATE DATABASE IF NOT EXISTS ShoppingSimplified CHARACTER SET latin1 COLLATE latin1_general_cs", function (err, result) {
      if (err) throw err;
      console.log("Database created");
      
    });

});