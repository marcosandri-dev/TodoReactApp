var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
  db.Todo.find().then(function(todos) {
    res.send(todos);
  });
});

router.get("/:id", function(req, res) {
  db.Todo.findById(req.params.id).then(function(todo) {
    res.send(todo);
  });
});

router.post("/", function(req, res) {
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
