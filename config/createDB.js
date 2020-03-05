var mysql = require('mysql'); //reauires my sql module

let build = mysql.createConnection({ //creates connection with the database 
  host: "localhost",//connection parameters
  user: "RGML",
  password: "12121312",
  //database: "ShoppingSimplified"
});

build.connect(function(err) { //opens connection
    if (err) throw err; //verify if error ocurred and returns it
    console.log("Connected!"); 
    //opens a connection query for the database creation with a mysql script
    build.query("CREATE DATABASE IF NOT EXISTS ShoppingSimplified CHARACTER SET latin1 COLLATE latin1_general_cs", function (err, result) {
      if (err) throw err;//verify if error ocurred and returns it
      console.log("Database created");
    });
    build.end(); //closes connection
});