const sql = require("./connect.js");

// constructor
const Group = function(group) {
  this.group_name = group.group_name;
  this.n_members = group.n_members;
  this.logo = group.logo;
};

Group.create = (newGroup, result) => {
  sql.query("INSERT INTO `groups` SET ?", newGroup, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Group: ", { id: res.insertId, ...newGroup });
    result(null, { id: res.insertId, ...newGroup});
  });
};

Group.findById = (groupId, result) => {
  sql.query("SELECT * FROM `groups` WHERE id = ${groupId}", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found group: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found user with the id
    result({ kind: "not_found" }, null);
  });
};

Group.getAll = result => {
  sql.query("SELECT * FROM `groups`", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("groups: ", res);
    result(null, res);
  });
};

Group.updateById = (id, group, result) => {

  if(group.group_name !=null){
  sql.query("UPDATE `groups` SET group_name = ? WHERE id = ${id}",
    [group.group_name],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found user with the id
        result({ kind: "not_found" }, null);
        return;
      }
    }
  );
}

else if(group.n_members !=null){
  sql.query("UPDATE `groups` SET n_members = ? WHERE id = ${id}",
    [group.n_members],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found user with the id
        result({ kind: "not_found" }, null);
        return;
      }
    }
  );
}

else if(group.logo !=null){
  sql.query("UPDATE `groups` SET logo = ? WHERE id = ${id}",
    [group.logo],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found user with the id
        result({ kind: "not_found" }, null);
        return;
      }
    }
  );
}


console.log("updated Group: ", { id: id, ...Group });
result(null, { id: id, ...Group }); 

};

Group.remove = (id, result) => {
  sql.query("DELETE FROM `groups` WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found user with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted group with id: ", id);
    result(null, res);
  });
};

Group.removeAll = result => {
  sql.query("DELETE FROM `groups`", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Groups`);
    result(null, res);
  });
};

module.exports = Group;