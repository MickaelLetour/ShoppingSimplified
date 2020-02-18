const sql = require("./connect.js");

// constructor
const item = function(item) {
    if (item.category_id.length !=0){ // int error with postman
        this.category_id = parseInt(item.category_id);
    }
    if (typeof item.name_item === 'string' && item.name_item.length !=0){
        this.name_item = item.name_item;
    }
    if (item.icon_id.length !=0){
        this.icon_id = parseInt(item.icon_id);
    }
};


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

item.findById = (itemId, result) => {
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

item.getAll = result => {
  sql.query("SELECT * FROM item", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("items: ", res);
    result(null, res);
  });
};

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