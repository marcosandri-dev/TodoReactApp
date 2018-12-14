var express = require("express"),
  app = express(),
  port = process.env.PORT || 8000;

var todoRoutes = require("./routes/todos");

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.use(express.json());
app.use("/api/todos", todoRoutes);

app.listen(port, function() {
  console.log("APP IS RUNNING ON PORT " + port);
});
