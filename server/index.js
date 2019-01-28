require("dotenv").config();
var express = require("express"),
  app = express(),
  port = process.env.PORT || 8000;

var cors = require("cors");
app.use(cors());
app.use(express.static(__dirname + "/build"));

var todoRoutes = require("./routes/todos");
var userRoutes = require("./routes/users");

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.use(express.json());
app.use("/api/todos", todoRoutes);
app.use("/api/users", userRoutes);

app.listen(port, function() {
  console.log("APP IS RUNNING ON PORT " + port);
});
