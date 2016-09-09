var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var _ = require("lodash");
var path = require("path");

// Create the express app
var app = express();

// Add middleware for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(express.static(__dirname + "/../client/public"));
console.log(__dirname + "/../client/public");

// CORS Support
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

// Connect to Mongo Database
mongoose.connect('mongodb://localhost/site');
mongoose.connection.once('open', function() {

	// Load models
	app.models = require('./models/index');

	// Load routes
	_.each(require('./routes'), function(controller, route) {
		app.use(route, controller(app, route));
	});


	// Start server
	console.log('Listening on port 3000...');
	app.listen(3000);

})
