const sql = require("./connect.js");

// constructor
const List_Item = function(list_item) {
  this.id_List = list_item.id_List;
  this.id_Item = list_item.id_Item;
  this.quantity = list_item.quantity;
  this.status = list_item.status;
};

List_Item.create = (newList_Item, result) => {
  sql.query("INSERT INTO list_item SET ?", newList_Item, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created list_item: ", { id: res.insertId, ...newList_Item });
    result(null, { id: res.insertId, ...newList_Item });
  });
};

List_Item.findListById = (listId, result) => {
  sql.query(`SELECT * FROM list_item WHERE id_List = ${listId}`, (err, res) => {
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
    // not found category with the id
    result({ kind: "not_found" }, null);
  });
};

List_Item.findItemById = (itemId, result) => {
    sql.query(`SELECT * FROM list_item WHERE id_Group = ${itemId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found item: ", res);
        result(null, res);
        return;
      }
      // not found category with the id
      result({ kind: "not_found" }, null);
    });
  };

List_Item.getAll = result => {
  sql.query("SELECT * FROM list_item", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("list_item: ", res);
    result(null, res);
  });
};


List_Item.removeItemFromList = (id_list,id_item, result) => {
  sql.query("DELETE FROM list_item WHERE id_List = ? AND id_Item = ?",
  [id_list,id_item], (err, res) => {
     
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

    console.log("deleted Item with id: ", id_item);
    result(null, res);
  });
};

List_Item.removeAll = result => {
  sql.query("DELETE FROM list_item", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} list_item`);
    result(null, res);
  });
};

List_Item.updateDataByIds = (id_list,id_item, list_item, result) => {
    if(list_item.quantity !=null){
    sql.query("UPDATE list_item SET quantity = ? WHERE id_List = ? AND id_Item = ?",
      [list_item.quantity, id_list, id_item],
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
  
  else if(list_item.status !=null){
    sql.query("UPDATE list_item SET status = ? WHERE id_List = ? AND id_Item= ?",
      [list_item.status, id_list,id_item],
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
}

module.exports = List_Item;