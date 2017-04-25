// NPM packages needed to run the application

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Tells node that we are creating an "express" server
var app = express();

// Set an initial port.
var PORT = process.env.PORT || 3000;

// BodyParser makes it possible for our server to interpret data sent to it.
// Add the standard 4 lines of code to use bodyParser as middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);



// Listener
// This code will start the server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
