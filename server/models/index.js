var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose
  .connect(
    `mongodb://${process.env.USERDB}:${
      process.env.PASSDB
    }@ds159591.mlab.com:59591/todolist`
  )
  .then(function(response) {
    console.log("connected");
  })
  .catch(function(error) {
    console.log("not connected");
    console.log(error.errmsg);
  });

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
