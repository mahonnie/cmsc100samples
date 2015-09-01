// Sibal, Naomi Joy S.
// 2013-56446
// index.js
var express = require('express');
var app = express();

/*
app.get('/', function(req, res){
	res.send("Hello World!");
});

// ".get" http requests method
// '/' - first parameter; path
// 'function(req, res)' - second parameter; callback function using specified method

app.route('/student')
	.get(function(req, res){
		res.send('Get a student');
	})
	.post(function(req, res)
		res.send('Add a student');
	})
	.put(function(req, res)
		res.send('Update a student');
	});
// '/student' - path
*/

app.use(require('body-parser').json()); // package
app.use(require('body-parser').urlencoded({extended: false})); // package
app.use(require('method-override')()); // package
app.use(require(__dirname + '/config/router')(express.Router()));

var server = app.listen(5000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});

// Basic Routing
// Routing refers to determining how an application responds to a client
//         request to a particular endpoint
// Which is a URL requested through a specific HTTP method
//         (GET, POST, PUT, DELETE, etc.)
