"user strict";
var sql = require("./db.js");

var User = function(user) {
  this.username = user.Username;
  this.password = user.Password;
  this.position = user.Position;
};

User.createUser = function createUser(User, result) {
  sql.query(
    "Insert into user (Username,Password,Posisi) values(?,?,?)",
    [User.username, User.password, User.position],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, "success");
      }
    }
  );
};

User.getUserById = function getUser(taskId, result) {
  sql.query("Select * from user where ID_user = ? ", taskId, function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

User.getAllTask = function getAllTask(result) {
  sql.query("Select * from user", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("tasks : ", res);

      result(null, res);
    }
  });
};
User.updateById = function(id, User, result) {
  sql.query(
    "UPDATE user set Username=?,Password=?,Posisi=? where ID_user=?",
    [User.username, User.password, User.position, id],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
User.remove = function(id, result) {
  sql.query("DELETE FROM user WHERE ID_user = ?", [id], function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = User;
