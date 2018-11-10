"use strict";
module.exports = function(app) {
  var todoList = require("../controller/usercontroller");

  // todoList Routes
  app.route("/user").get(todoList.list_all_tasks);
  app.route("/insertuser").post(todoList.create_a_task);

  app.route("/user/:userId").get(todoList.read_a_task);
  app.route("/updateuser/:userId").post(todoList.update_a_task);
  app.route("/deleteuser/:userId").post(todoList.delete_a_task);
};
