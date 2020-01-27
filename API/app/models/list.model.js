const sql = require("./connect.js");

// constructor
const list = function(list) {
    if (typeof list.group_id == 'number' && list.group_id.length !=0){// int error with postman
        this.group_id = list.group_id;
    }
    if (typeof list.name === 'string' && list.name.length !=0){
        this.name = list.name;
    }
};

list.create = (newlist, result) => {
  sql.query("INSERT INTO list SET ?", newlist, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created list: ", { id: res.insertId, ...newlist });
    result(null, { id: res.insertId, ...newlist });
  });
};

list.findById = (listId, result) => {
  sql.query(`SELECT * FROM list WHERE id = ${listId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found list: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found list with the id
    result({ kind: "not_found" }, null);
  });
};

list.getAll = result => {
  sql.query("SELECT * FROM list", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("lists: ", res);
    result(null, res);
  });
};

list.updateById = (id, list, result) => {
  sql.query(
    "UPDATE list SET name = ? WHERE id = ?",
    [list.name, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found list with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated list: ", { id: id, ...list });
      result(null, { id: id, ...list });
    }
  );
};

list.remove = (id, result) => {
  sql.query("DELETE FROM list WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found list with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted list with id: ", id);
    result(null, res);
  });
};

list.removeAll = result => {
  sql.query("DELETE FROM list", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} lists`);
    result(null, res);
  });
};

module.exports = list;