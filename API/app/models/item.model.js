const sql = require("./connect.js");

// constructor
const item = function(item) {
    if (item.category_id.length !=0){ 
        this.category_id = parseInt(item.category_id);// transform a string on Int
    }
    if (typeof item.name_item === 'string' && item.name_item.length !=0){
        this.name_item = item.name_item;
    }
    if (item.icon_id.length !=0){
        this.icon_id = parseInt(item.icon_id);// transform a string on Int
    }
};

//create a new item
item.create = (newitem, result) => {
  sql.query(`INSERT INTO item SET ?`, newitem, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created item: ", { id: res.insertId, ...newitem });
    result(null, { id: res.insertId, ...newitem });
  });
}; 

// find an item with an id
item.findById = (itemId, result) => {
  sql.query(`SELECT * FROM item WHERE id = ${itemId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found item: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found item with the id
    result({ kind: "not_found" }, null);
  });
};

// find an item and information related of icon and category with an id
item.findByIdWithInfo = (itemId, result) => {
  sql.query(`SELECT * FROM item INNER JOIN icon on item.icon_id = icon.id_icon INNER JOIN category on item.category_id = category.id_category WHERE id = ${itemId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found item: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found item with the id
    result({ kind: "not_found" }, null);
  });
};

// find all items and send theyr data
item.getAll = result => { //opens function with no paremeters
  sql.query("SELECT * FROM item", (err, res) => { //sends request to database using "sql." connection and syntax
    if (err) { //if an error occurs returns the error
      console.log("error: ", err); //console logs error
      result(null, err); //returns error
      return;
    }

    console.log("items: ", res); //if there was no error, console logs response
    result(null, res); //returns response to controller
  });
};

//find all items and informations related of icons and categories
item.getAllWithJoin = result => {
  sql.query("SELECT * FROM item INNER JOIN icon on item.icon_id = icon.id_icon INNER JOIN category on item.category_id = category.id_category", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("items: ", res);
    result(null, res);
  });
};

//update an item with an id
item.updateById = (id, item, result) => {
  sql.query(
    "UPDATE item SET name_item = ?, category_id = ?, icon_id = ?  WHERE id = ?",
    [item.name_item,item.category_id,item.icon_id, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found item with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated item: ", { id: id, ...item });
      result(null, { id: id, ...item });
    }
  );
};

//delete an item with an id
item.remove = (id, result) => {
  sql.query("DELETE FROM item WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found item with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted item with id: ", id);
    result(null, res);
  });
};

//delete all items
/* item.removeAll = result => {
  sql.query("DELETE FROM item", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} items`);
    result(null, res);
  });
}; */

module.exports = item;