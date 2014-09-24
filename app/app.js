var mongoose = require('mongoose')
,	bodyParser = require('body-parser')
,	express = require('express')
,	router = require('./routes/router')
,	cors = require('cors')
,	app = express();


mongoose.connect('mongodb://localhost/nomo', function (err, db) {
	if (err) {
		console.log(err);
	} else {
		console.log("Connected to database.");	
	}
});

// Configure body parsing middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Apply Pretty format to JSON responses.
app.set('json spaces', 2);

// Enable all CORS requests.
app.use(cors());

// Apply routes to the application.
app.use('/', router);

app.listen(3000);
console.log("App listening on port 3000");