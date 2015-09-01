// Sibal, Naomi Joy S.
// 2013-56446
// controllers/student.js
var db = require(__dirname + './../lib/mysql');

// get
exports.find = function(req, res){
	db.query("SELECT * FROM student", function(err, rows){
		if(err) return next(err);
		res.send(rows);
	});
};

// get
exports.findOne = function(req, res, next){
	db.query("SELECT * FROM student WHERE studentno='"
		+ req.params.studentno + "'", function(err, rows){
			if(err) return next(err);
			if (rows.length === 0){
				res.send(404, {message: 'Student Number not found'})
			}else {
				res.send(rows[0]);
			}
		});
};

// post
exports.insert = function(req, res, next){
	db.query("INSERT INTO student(studentno, NAME, birthday) VALUES(?, ?, ?)", 
		[req.body.studentno, req.body.NAME, res.body.birthday], function(err, rows){
			if(err) return next(err);
			res.send(rows);
		}
	);
};

// delete
exports.remove = function(req, res, next){
	db.query("DELETE FROM student WHERE studentno=?", [req.params.studentno],
		function(err, rows){
		if(err) return next(err);
		res.send(rows);
	});
};

// put
exports.update = function(req, res, next){
	db.query("UPDATE student SET NAME=?, birthday=? WHERE studentno=?",
		[req.body.NAME, req.body.birthday, req.body.studentno],
			function(err, rows){
			if(err) return next(err);
			res.send(rows);
	});
};
