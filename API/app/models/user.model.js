const sql = require("./connect.js");
var passwordHash = require ('password-hash');

// constructor
const user = function(user) {
  if (typeof user.nickname === 'string' && user.nickname.length !=0){
    this.nickname = user.nickname;
  }
  if (typeof user.password === 'string' && user.password.length !=0){
    this.password = passwordHash.generate(user.password);
  }
  if (typeof user.email === 'string' && user.email.length !=0){
    this.email = user.email;
  }
  if (typeof user.photo === 'string' && user.photo.length !=0){
    this.photo = user.photo;
  }
  if (typeof user.active === 'string' && user.active.length !=0){
    this.active = user.active;
  }
  if (typeof user.temporaryToken === 'string' && user.temporaryToken.length !=0){
    this.temporaryToken = user.temporaryToken;
  }

  else {
    console.log("Error type or empty");
  }
};

user.create = (newuser, result) => {
  sql.query(`SELECT * FROM user WHERE user.email = '${newuser.email}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    else if (res.length !=0){
      console.log("email exists");
      return;
    }
    else if (res.length ==0){
      sql.query(`SELECT * FROM user WHERE user.nickname = '${newuser.nickname}'`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        else if (res.length !=0){
          console.log("nickname exists");
          return;
        }
        else if (res.length ==0){
          sql.query("INSERT INTO user SET ?", newuser, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
          result(null, { id: res.insertId, ...newuser });
          });
        }
      });
    };
  });
}

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

 user.getPwByNick = (userNick, result) => {
  sql.query("SELECT id,password,active FROM user where nickname = ?", userNick, (err,res)=>{
    if(err) {
      console.log("error: ", err);
      result(null,false);
    }
    console.log("pass: ", res);
    result(null, res[0]);
  })
} 

/* user.getEmail = result => {
  sql.query("SELECT email FROM user", (err,res)=>{
    if(err) {
      console.log("mail: ", err);
      result(null,err);
      return;
    }
    console.log("emails: ", res);
    result(null, res);
  });
} */

user.getPass = result => {
  sql.query("SELECT passwords FROM user", (err,res)=>{
    if(err) {
      console.log("mail: ", err);
      result(null,err);
      return;
    }
    console.log("emails: ", res);
    result(null, res);
  });
}
user.updateUserByToken = (token, result) => {
    sql.query(`UPDATE user SET user.active = 1, temporaryToken = NULL WHERE user.temporaryToken ='${token}'`,(err, res) => {
      if (err) {
        console.log("error:", err);
        result(null, err);
        return;
      }
      else {
        result(null, res);
        return;
      }
    }
    );
}

user.updatePass = (newuser, result) => {
  sql.query(`UPDATE user SET user.password = '${newuser.password}', user.active = 1, user.temporaryToken = NULL WHERE user.temporaryToken = '${newuser.temporaryToken}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    else {
      result(null, res);
      return;
    }
  });
}

user.forgotPassword = (newuser, result) => {
  sql.query(`UPDATE user SET user.active = 0,temporaryToken = '${newuser.temporaryToken}' WHERE user.email = '${newuser.email}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    else {
      result(null, res);
      return;
    }
  });
}
user.updatePassByToken = (newuser, result) => {
  sql.query(`UPDATE user SET user.active = 1, temporaryToken = NULL WHERE user.temporaryToken ='${newuser.token}'`,(err, res) => {
    if (err) {
      console.log("error:", err);
      result(null, err);
      return;
    }
    else {
      result(null, res);
      //res.redirect('http://localhost:21012/');
      return;
    }
  }
  );
}

user.verifToken = (token, result) => {
  sql.query(`SELECT * FROM user WHERE user.temporaryToken = '${token}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    else {
      result(null, res);
      return;
    }
  });
};
  
user.updateById = (id, user, result) => {

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