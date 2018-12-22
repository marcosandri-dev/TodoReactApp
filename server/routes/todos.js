var express = require("express");
var router = express.Router();
var db = require("../models");

/*router.get("/", function(req, res) {
  console.log(req.body);
  db.Todo.find({ id_project: req.body.id_project }).then(function(todos) {
    res.send(todos);
  });
});*/

router.get("/:id", function(req, res) {
  db.Todo.find({ id_project: req.params.id }).then(function(todos) {
    res.send(todos);
  });
});

router.post("/", function(req, res) {
  console.log(req.body);
  db.Todo.create(req.body)
    .then(function(todo) {
      res.send(todo);
    })
    .catch(function(error) {
      res.send(error);
    });
});

router.put("/:id", function(req, res) {
  db.Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(function(todo) {
      res.send(todo);
    })
    .catch(function(error) {
      res.send(error);
    });
});

router.delete("/:id", function(req, res) {
  db.Todo.remove({ _id: req.params.id })
    .then(function(todo) {
      res.send("Deleted");
    })
    .catch(function(error) {
      res.send(error);
    });
});

module.exports = router;
