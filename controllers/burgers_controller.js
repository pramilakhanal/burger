var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

// Create all our routes

router.get("/", function(req, res) {
	burger.all(function(data) {
		var burgersInfo = {
			burgers: data
		};
		console.log(burgersInfo);

		res.render("index", burgersInfo);
	});
});

	router.post("/", function(req, res) {
		console.log(req.body);

		burger.create(req.body), function(req, res) {
			res.redirect("/");
		};

	});


	router.put("/:id/:update", function(req, res) {
		var condition = {id: req.params.id};
		console.log("condition", condition);

		if (req.params.update === "0") {
			burger.update({devoured: true}, condition, function() {

				res.redirect("/");

			});
		}
		else {
			burger.update({devoured: false}, conditon, function() {
				res.redirect("/");
			});
		}
	});

	

	// Export routes for server.js to use.
	module.exports = router;