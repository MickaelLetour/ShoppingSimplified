const sql = require("./connect.js");

// constructor
const User_Groups = function(user_groups) {
  this.id_User = user_groups.id_User;
  this.id_Group = user_groups.id_Group;
};

// create a new group of users
User_Groups.create = (newUser_Group, result) => {
  sql.query("INSERT INTO `user_groups` SET ?", newUser_Group, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created User_Group: ", { id: res.insertId, ...newUser_Group });
    result(null, { id: res.insertId, ...newUser_Group });
  });
};

//get users in groups with an id of users
User_Groups.findUserGById = (userId, result) => {
  sql.query(`SELECT * FROM user_groups WHERE id_User = ${userId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found category with the id
    result({ kind: "not_found" }, null);
  });
};

//get a group with an id
User_Groups.findGroupById = (groupId, result) => {
    sql.query(`SELECT * FROM user_groups WHERE id_Group = ${groupId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found group: ", res);
        result(null, res);
        return;
      }
      // not found category with the id
      result({ kind: "not_found" }, null);
    });
  };

  //get all groups
User_Groups.getAll = result => {
  sql.query("SELECT * FROM `user_groups`", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("user_groups: ", res);
    result(null, res);
  });
};

// delete an user in a groups with an id of user
User_Groups.removeGuser = (id_user,id_group, result) => {
  sql.query("DELETE FROM user_groups WHERE id_User = ? AND id_Group = ?",
  [id_user,id_group], (err, res) => {
     
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

    //console.log("deleted icon with id: ", id);
    result(null, res);
  });
};

//delete all groups of users
User_Groups.removeAll = result => {
  sql.query("DELETE FROM `user_groups`", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} user_group`);
    result(null, res);
  });
};

module.exports = User_Groups;