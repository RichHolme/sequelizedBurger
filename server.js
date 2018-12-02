var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./routes/api-routes.js");

// app.use(routes);

// var db = require("./models");

app.get("/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    // db.Burgers.findAll({}).then(function(dbBurgers) {
      // We have access to the todos as an argument inside of the callback function
      // res.json(dbBurgers);
    // console.log(dbBurgers)
    console.log('route hit')
 	  res.render("index");
    // });
  });

// db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
// });
