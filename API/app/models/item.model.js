const sql = require("./connect.js");

// constructor
const item = function(item) {
    if (typeof item.category_id === 'number' && item.category_id.length !=0){ // int error with postman
        this.category_id = item.category_id;
    }
    if (typeof item.icon_id === 'number' && item.icon_id.length !=0){
        this.icon_id = item.icon_id;
    }
    if (typeof item.name === 'string' && item.name.length !=0){
        this.name = item.name;
    }
};


item.create = (newitem, result) => {
  sql.query("INSERT INTO item SET ?", newitem, (err, res) => {
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

item.updateById = (id, item, result) => {
  sql.query(
    "UPDATE item SET name = ? WHERE id = ?",
    [item.name, id],
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

item.removeAll = result => {
  sql.query("DELETE FROM item", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} items`);
    result(null, res);
  });
};

module.exports = item;