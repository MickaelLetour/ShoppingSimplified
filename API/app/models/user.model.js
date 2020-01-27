const sql = require("./connect.js");
var passwordHash = require ('password-hash');

// constructor
const user = function(user) {
  this.nickname =user.nickname;
  this.password = passwordHash.generate(user.password);
  this.email = user.email;
  this.photo = user.photo;
};

user.create = (newuser, result) => {
  sql.query("INSERT INTO user SET ?", newuser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newuser });
    result(null, { id: res.insertId, ...newuser });
  });
};

user.findById = (userId, result) => {
  sql.query(`SELECT * FROM user WHERE id = ${userId}`, (err, res) => {
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

    // not found user with the id
    result({ kind: "not_found" }, null);
  });
};

user.getAll = result => {
  sql.query("SELECT * FROM user", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

user.updateById = (id, user, result) => {
<<<<<<< HEAD

  if(user.nickname !=null){
  sql.query(`UPDATE user SET nickname = ? WHERE id = ${id}`,
    [user.nickname],
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

else if(user.password !=null){
  sql.query(`UPDATE user SET password = ? WHERE id = ${id}`,
    [user.password],
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

else if(user.email !=null){
  sql.query(`UPDATE user SET email = ? WHERE id = ${id}`,
    [user.email],
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

else if(user.photo !=null){
  sql.query(`UPDATE user SET photo = ? WHERE id = ${id}`,
    [user.photo],
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
console.log("updated user: ", { id: id, ...user });
result(null, { id: id, ...user }); 
/* else {
 sql.query(`UPDATE user SET nickname = ?, password = ?, email = ?, photo = ? WHERE id = ${id}`,
    [user.nickname, user.password, user.email, user.photo],
=======
  sql.query(
    "UPDATE user SET nickname = ?, password = ?, email = ?, photo = ? WHERE id = ?",
    [user.nickname, user.password, user.email, user.photo, id],
>>>>>>> mickael
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

      console.log("updated user: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
  } */
};

user.remove = (id, result) => {
  sql.query("DELETE FROM user WHERE id = ?", id, (err, res) => {
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

    console.log("deleted user with id: ", id);
    result(null, res);
  });
};

user.removeAll = result => {
  sql.query("DELETE FROM user", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} users`);
    result(null, res);
  });
};

module.exports = user;