var express = require("express");

var app = express();
var count = 0;

app.set("port", process.env.PORT || 3000);
app.get('/', function(req, res) {
   res.send("<h1>Patrick Lee, Hello World!</h1>" + count++);
});

app.listen(app.get("port"), function() {
   console.log("App started on port " + app.get("port"));
});
