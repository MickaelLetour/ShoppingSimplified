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
    sql = "CREATE TABLE IF NOT EXISTS `User` (id INT AUTO_INCREMENT NOT NULL, nickname VARCHAR(255), password VARCHAR(255), email VARCHAR(255), photo TEXT, PRIMARY KEY (id))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table USER created");
    }); 

    if (err) throw err;
    console.log("Connected!");
    sql = "CREATE TABLE IF NOT EXISTS `Groups` (id INT AUTO_INCREMENT NOT NULL, group_name VARCHAR(255), n_members INT(2), logo TEXT, PRIMARY KEY (id))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table Group created");
    }); 

    
    if (err) throw err;
    console.log("Connected!");
    sql = "CREATE TABLE IF NOT EXISTS `User_Groups` (id_User INT(11) NOT NULL, id_Group INT(11) NOT NULL, PRIMARY KEY (id_User,id_Group), FOREIGN KEY (id_User) references `User`(id), FOREIGN KEY (id_Group) references `Groups`(id))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table User_Group created");
    }); 


    if (err) throw err;
    console.log("Connected!");
    sql = "CREATE TABLE IF NOT EXISTS `List` (id INT(15) AUTO_INCREMENT NOT NULL, group_id INT(11), name VARCHAR(255), PRIMARY KEY (id), FOREIGN KEY (group_id) references `Groups`(id))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table List created");
    }); 


    if (err) throw err;
    console.log("Connected!");
    sql = "CREATE TABLE IF NOT EXISTS `Category` (id INT(5) AUTO_INCREMENT NOT NULL, name VARCHAR(255), PRIMARY KEY (id))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table Category created");
    });

    if (err) throw err;
    console.log("Connected!");
    sql = "CREATE TABLE IF NOT EXISTS `Icon` (id INT(20) AUTO_INCREMENT NOT NULL, icon TEXT, PRIMARY KEY (id))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table ICON created");
    });

    if (err) throw err;
    console.log("Connected!");
    sql = "CREATE TABLE IF NOT EXISTS `Item` (id INT(20) AUTO_INCREMENT NOT NULL, category_id INT(5),icon_ID INT(20), name VARCHAR(255), PRIMARY KEY (id), FOREIGN KEY (category_id) references `Category`(id), FOREIGN KEY (icon_ID) references `Icon`(id))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table ITEM created");
    });


    if (err) throw err;
    console.log("Connected!");
    sql = "CREATE TABLE IF NOT EXISTS `List_Item` (id_List INT(15) NOT NULL, id_Item INT(20) NOT NULL, quantity INT(5), PRIMARY KEY (id_List,id_Item), FOREIGN KEY (id_List) references List(id), FOREIGN KEY (id_Item) references `Item`(id))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table User_Group created");
    });
});

   

  
