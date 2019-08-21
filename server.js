// Dependencies 
var express = require ("express"); 
var exphbs = require ("express-handlebars");
var bodyParser = require ("body-parser");
var methodOverride = require("method-override");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

var PORT = process.env.PORT || 3000;

var app = express();

// Parse request body as JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use (bodyParser.json()); 
app.use(methodOverride("_method")); 

// Set Handlebars
app.engine ("handlebars", exphbs({ defaultLayout: "main" })); 
app.set ("view engine", "handlebars"); 

app.use("/", routes);

// Import routes and give the server access to them.
app.listen(PORT, () => {
    console.log("App now listening at localhost:" + PORT);
  });