var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;

var todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name cannot be blank!"
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  id_project: {
    type: ObjectId,
    required: true
  }
});

var Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
