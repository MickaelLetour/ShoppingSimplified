const sql = require("./connect.js");

// constructor
const list = function(list) {
    if (typeof list.group_id === 'number'  && list.group_id !==null) {
        this.group_id = list.group_id;
    }
    if (typeof list.name === 'string' && list.name.length !=0){
        this.name = list.name;
    }

    if (typeof list.active === 'number' && list.active !==null){
      this.active = list.active;
  }
};

//create a new list
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

//get a list with an id
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

//get list by group with an id
list.listByGroupId = (idGroup, result) =>{
  sql.query(`SELECT * FROM list WHERE group_id = ${idGroup}` , (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found list: ", res);
      result(null, res);
      return;
    }

    // not found list with the id
    result({ kind: "not_found" }, null);
  });
}

//get the last list added
list.lastAdded = result => {
  sql.query("SELECT * FROM list ORDER BY id DESC LIMIT 1", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("lists: ", res);
    result(null, res);
  });
};

//get all list
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

//update a list with an id
list.updateById = (id, list, result) => { //opens function with requested parameters
  sql.query( //opens sql connection query
    "UPDATE list SET name = ? WHERE id = ?", //sql update instruction
    [list.name, id], //changes list name where id matches with the values in request
    (err, res) => { //if there was a error 
      if (err) { //return the error
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) { //if there was no change or list with id not found
        // not found list with the id
        result({ kind: "not_found" }, null); //returns not found
        return;
      }

      console.log("updated list: ", { id: id, ...list }); //console log response
      result(null, { id: id, ...list }); //returns server response to controller.
    }
  );
};

//update the list active with his id
list.updateActiveById = (id, list, result) => {
  sql.query(
    "UPDATE list SET active = ? WHERE id = ?",
    [list.active, id],
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