const sql = require("./connect.js");

// constructor
const Icon = function(icon) {//verify if not null and type
  if (typeof icon.icon === 'string' && icon.icon.length !=0){
    this.icon = icon.icon;
  }
  
  if (typeof icon.name=== 'string' && icon.name.length !=0){
    this.name = icon.name;
  }
  else {
    console.log("Error type or empty");
  }
};

//create a new icon 
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

//get an icon with en id
Icon.findById = (iconId, result) => {
  sql.query(`SELECT * FROM icon WHERE id_icon = ${iconId}`, (err, res) => {
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

//get all Icon
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

//Get all icon not used by an item
Icon.getNotUsed = result => {
  sql.query("SELECT * FROM icon LEFT JOIN item on icon.id_icon = item.icon_id WHERE item.icon_id IS NULL", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("icon: ", res);
    result(null, res);
  });
};

//update an icon with en id
Icon.updateById = (id, icon, result) => {
  sql.query(
    "UPDATE icon SET icon = ? WHERE id_icon = ?",
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

//delete an icon with an id
Icon.remove = (id, result) => {
  sql.query("DELETE FROM icon WHERE id_icon = ?", id, (err, res) => {
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

//delete all icon
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