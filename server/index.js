var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var browserify = require("browserify-middleware");
var methodOverride = require("method-override");
var _ = require("lodash");
var path = require("path");

// Create the express app
var app = express();

// Add middleware for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(express.static(__dirname + "/../public"));

// CORS Support
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

// Connect to Mongo Database
var secretCreds = require("../secret/mlabcreds");
mongoose.connect(secretCreds.uri);
mongoose.connection.once('open', function() {

	// Load models
	app.models = require('./models/index');

	// Load routes
	_.each(require('./routes'), function(controller, route) {
		app.use(route, controller(app, route));
	});

	app.get('/*', function(req, res) {
		res.sendFile(path.join(__dirname, '/../public/index.html'));
	})


	// Start server
	console.log('Listening on port', process.env.PORT || 3000);
	app.listen(process.env.PORT || 3000);

})
