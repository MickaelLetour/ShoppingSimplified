const sql = require("./connect.js");

// constructor
const Icon = function(icon) {
  this.icon = icon.icon;
};

Icon.create = (newIcon, result) => {
  sql.query("INSERT INTO icon SET ?", newIcon, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created icon: ", { id: res.insertId, ...newIcon });
    result(null, { id: res.insertId, ...newIcon });
  });
};

Icon.findById = (iconId, result) => {
  sql.query(`SELECT * FROM icon WHERE id = ${iconId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found icon: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found category with the id
    result({ kind: "not_found" }, null);
  });
};

Icon.getAll = result => {
  sql.query("SELECT * FROM icon", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("icon: ", res);
    result(null, res);
  });
};

Icon.updateById = (id, icon, result) => {
  sql.query(
    "UPDATE icon SET icon = ? WHERE id = ?",
    [icon.icon, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found category with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated icon: ", { id: id, ...icon });
      result(null, { id: id, ...icon });
    }
  );
};

Icon.remove = (id, result) => {
  sql.query("DELETE FROM icon WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found category with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted icon with id: ", id);
    result(null, res);
  });
};

Icon.removeAll = result => {
  sql.query("DELETE FROM icon", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} categories`);
    result(null, res);
  });
};

module.exports = Icon;