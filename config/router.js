// Sibal, Naomi Joy S.
// 2013-56446
// config/router.js
var student = require('./../controllers/student');
var degree = require('./../controllers/degree');

module.exports = function (router) {
	
	//routes for student
	router.route('/students')
		.get(student.find)
		.post(student.insert)
		.put(student.update);
		
	router.route('/students/:studentno')
		.get(student.findOne)
		.delete(student.remove);
	
	//router for degree
	router.route('/degrees')
		.get(degree.find)
		.post(degree.insert)
		.put(degree.update);

	router.route('/degrees/:id')
		.get(degree.findOne)
		.delete(degree.remove);

	return router;
};
