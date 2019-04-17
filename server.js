//Require express and body-parser (dependencies)
var express = require("express");
var bodyParser = require("body-parser");

//Define port the server will be listening on.
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Set Express-Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import API routes 
var routes = require("./controllers/burgers_Controller.js");

app.use(routes);

//Magic is happing on Port:8080
app.listen(PORT, function() {
  console.log("App is ready to go on localhost: " + PORT);
});
