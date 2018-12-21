require("dotenv").config();
var express = require("express"),
  app = express(),
  port = process.env.PORT || 8000;

var cors = require("cors");
app.use(cors());
app.use(express.static(__dirname + "/dist"));

var todoRoutes = require("./routes/todos");
var projectRoutes = require("./routes/projects");

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.use(express.json());
app.use("/api/todos", todoRoutes);
app.use("/api/projects", projectRoutes);

app.listen(port, function() {
  console.log("APP IS RUNNING ON PORT " + port);
});
