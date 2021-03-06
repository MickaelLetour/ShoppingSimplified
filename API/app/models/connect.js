const mysql = require("mysql");//module
const dbConfig = require("../config/db.config.js");// file for connect dataBase

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {//connection on the database
  if (error) throw error;
  console.log("Successfully connected to the database."); //else condition
});

module.exports = connection;