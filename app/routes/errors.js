module.exports = function (app) {

	app.use(function (req, res, next) {
		res.status(404);
		res.send("Page not found.");
	});

	app.use(function (err, req, res, next) {
		res.status(501);
		res.send("Something went wrong.");
		console.error(err);
	});
}