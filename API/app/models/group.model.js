const sql = require("./connect.js");

// constructor
const Group = function(group) {
  if (typeof group.group_name === 'string' && group.group_name.length !=0){
    this.group_name = group.group_name;
  }
  if (typeof group.n_members === 'number' && group.n_members.length !=0){
    this.n_members = group.n_members;
  }
  if (typeof group.active === 'number' && group.active.length !=0){
    this.active = group.active;
  }
  if (typeof group.logo === 'string' && group.logo.length !=0){
    this.logo = group.logo;
  }
}
  
//create a new group
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

// get a group with an Id
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

//get all groups
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

// update a group with an Id
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


else if(group.active !=null){
  sql.query("UPDATE `groups` SET active = ? WHERE id = ${id}",
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