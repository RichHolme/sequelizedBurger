var express = require("express");
var bodyParser = require("body-parser");
var path =  require("path");
var favicon = require('serve-favicon');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(favicon(path.join(__dirname,'public', 'assets' , 'img' , 'burger2.png')));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./routes/api-routes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

