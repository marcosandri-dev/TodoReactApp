var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

var User = mongoose.model("Project", userSchema);

module.exports = User;
