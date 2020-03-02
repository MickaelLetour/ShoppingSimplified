const sql = require("./connect.js");

// constructor
const category = function(category) {//verify the type of data send and it's ok, stock it.
  if (typeof category.name === 'string' && category.name.length !=0){
    this.name = category.name;
  }
};

//create new category
category.create = (newcategory, result) => {//
  sql.query("INSERT INTO category SET ?", newcategory, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created category: ", { id: res.insertId, ...newcategory });
    result(null, { id: res.insertId, ...newcategory });
  });
};

//get category with it's Id
category.findById = (categoryId, result) => {
  sql.query(`SELECT * FROM category WHERE id_category = ${categoryId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found category: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found category with the id
    result({ kind: "not_found" }, null);
  });
};

//get all categorys
category.getAll = result => {
  sql.query("SELECT * FROM category", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("categories: ", res);
    result(null, res);
  });
};

//update category with an Id
category.updateById = (id, category, result) => {
  sql.query(
    "UPDATE category SET name = ? WHERE id_category = ?",
    [category.name, id],
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

      console.log("updated category: ", { id: id, ...category });
      result(null, { id: id, ...category });
    }
  );
};

//delete one category with an Id
category.remove = (id, result) => {
  sql.query("DELETE FROM category WHERE id_category = ?", id, (err, res) => {
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

    console.log("deleted category with id: ", id);
    result(null, res);
  });
};

//delete all categorys
category.removeAll = result => {
  sql.query("DELETE FROM category", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} categories`);
    result(null, res);
  });
};

module.exports = category;