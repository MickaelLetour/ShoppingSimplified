var mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "RGML",
    password: "12121312",
    database: "ShoppingSimplified"
  }); 

con.connect(function(err) {
    let sql;
    if (err) throw err;
    console.log("Connected!");
    sql = "CREATE TABLE IF NOT EXISTS User (ID INT AUTO_INCREMENT NOT NULL, nickname VARCHAR(255), password VARCHAR(255), email VARCHAR(255), photo TEXT, PRIMARY KEY (ID))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table USER created");
    }); 

    if (err) throw err;
    console.log("Connected!");
    sql = "CREATE TABLE IF NOT EXISTS Groups (ID INT AUTO_INCREMENT NOT NULL, group_name VARCHAR(255), n_members INT(2), logo TEXT, PRIMARY KEY (ID))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table Group created");
    }); 

    
    if (err) throw err;
    console.log("Connected!");
    sql = "CREATE TABLE IF NOT EXISTS User_Groups (ID_User INT(11) NOT NULL, ID_Group INT(11) NOT NULL, PRIMARY KEY (ID_User,ID_Group), FOREIGN KEY (ID_User) references User(ID), FOREIGN KEY (ID_Group) references Groups(ID))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table User_Group created");
    }); 


    if (err) throw err;
    console.log("Connected!");
    sql = "CREATE TABLE IF NOT EXISTS List (ID INT(15) AUTO_INCREMENT NOT NULL, group_ID INT(11), name VARCHAR(255), PRIMARY KEY (ID), FOREIGN KEY (group_ID) references Groups(ID))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table List created");
    }); 


    if (err) throw err;
    console.log("Connected!");
    sql = "CREATE TABLE IF NOT EXISTS Category (ID INT(5) AUTO_INCREMENT NOT NULL, Category VARCHAR(255), PRIMARY KEY (ID))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table Category created");
    });

    if (err) throw err;
    console.log("Connected!");
    sql = "CREATE TABLE IF NOT EXISTS Item (ID INT(20) AUTO_INCREMENT NOT NULL, category_ID INT(5), name VARCHAR(255), quantity INT(5), logo TEXT, PRIMARY KEY (ID), FOREIGN KEY (category_ID) references Category(ID))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table ITEM created");
    });

    if (err) throw err;
    console.log("Connected!");
    sql = "CREATE TABLE IF NOT EXISTS List_Item (ID_List INT(15) NOT NULL, ID_Item INT(20) NOT NULL, PRIMARY KEY (ID_List,ID_Item), FOREIGN KEY (ID_List) references List(ID), FOREIGN KEY (ID_Item) references Item(ID))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table User_Group created");
    });
});

   

  
