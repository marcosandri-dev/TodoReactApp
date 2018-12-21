var mongoose = require("mongoose");

var projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

var Project = mongoose.model("Project", projectSchema);

module.exports = Project;
