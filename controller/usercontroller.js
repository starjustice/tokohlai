"use strict";

var User = require("../models/usermodel.js");

exports.list_all_tasks = function(req, res) {
  User.getAllTask(function(err, task) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", task);
    res.send(task);
  });
};
exports.read_a_task = function(req, res) {
  User.getUserById(req.params.userId, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.create_a_task = function(req, res) {
  var new_task = new User(req.body);

  //handles null error
  if (!new_task.username && !new_task.password && !new_task.position) {
    res.status(400).send({ error: true, message: "Please provide data" });
  } else {
    User.createUser(new_task, function(err, task) {
      if (err) res.send(err);
      res.json(task);
    });
  }
};

exports.update_a_task = function(req, res) {
  User.updateById(req.params.userId, new User(req.body), function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.delete_a_task = function(req, res) {
  User.remove(req.params.userId, function(err, task) {
    if (err) res.send(err);
    res.json({ message: "Task successfully deleted" });
  });
};
