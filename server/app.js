var path = require('path');
var express = require('express');
var app = express();
var server = require('http').createServer(app);

var Promise = require('bluebird');
var mongoose = require('mongoose');

require('dotenv').config();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var ExecuteRequest = require('./RequestHandlers');

// Connection to MongoDB Altas via mongoose
mongoose.Promise = Promise;
var db_uri = process.env.DB_URI;

mongoose.connect(db_uri, (err) => {if (err) console.log("Mongoose error: " + err)});

server.listen(process.env.PORT || 8080, function() {
	console.log("Node server started")
});