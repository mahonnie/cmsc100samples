// Sibal, Naomi Joy S.
// 2013-56446
// controllers/degree.js
var db = require(__dirname + './../lib/mysql');

// get
exports.find = function(req, res, next){
	db.query("SELECT * from degree", function(err, rows) {
		if(err) return next(err);
		res.send(rows);
	});
};

// get
exports.findOne = function(req, res, next){
	db.query("SELECT * FROM degree WHERE degree_id='"
		+ req.params.id + "'", function(err, rows){
			if(err) return next(err);
			if (rows.length === 0){
				res.send(404, {message: 'Degree program not found'})
			}else {
				res.send(rows[0]);
			}
		});
};

// post
exports.insert = function(req, res, next){
	db.query("INSERT INTO degree(degree_code, description) VALUES(?, ?)", 
		[req.body.degree_code, req.body.description], function(err, rows){
			if(err) return next(err);
			res.send(rows);
		}
	);
};

// delete
exports.remove = function(req, res, next){
	db.query("DELETE FROM degree WHERE degree_id=?", [req.params.id],
		function(err, rows){
		if(err) return next(err);
		res.send(rows);
	});
};

// put
exports.update = function(req, res, next){
	db.query("UPDATE degree SET description =?, total_units=? WHERE degree_id=?",
		[req.body.description, req.body.total_untis, req.body.degree_id],
			function(err, rows){
			if(err) return next(err);
			res.send(rows);
	});
};