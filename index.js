var express = require("express");

var app = express();
var count = 0;

app.set("port", process.env.PORT || 3001);
app.use('/', function(req, res) {
   res.setHeader('Content-Type','text/html');
   res.write("timer:");
   res.write("<h1>Patrick Lee, Hello World!</h1>" + count++);
   res.end();
});

app.listen(app.get("port"), function() {
   console.log("App started on port " + app.get("port"));
});
