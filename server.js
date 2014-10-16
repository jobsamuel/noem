var app = require('./app/app.js');

app.set('port', process.env.PORT || 3000);

app.listen(app.set('port'), function() {
	console.log("App listening on port " + app.set('port'));
});