var express = require('express')
,	Biz = require('./../models/biz') 
,	router = express.Router();

function allBusiness(req, res) {
	Biz.find({}, function (err, businesses) {
		if (err) {
			res.send(err);
		} else {
			res.send(businesses);
		}
	});
}

function justOneBusiness(req, res) {
	Biz.findOne({name: req.params.name}, function (err, business) {
		if (err) {
			res.send(err);
		} else {
			res.send(business);
		}
	});
}

function addBusiness(req, res) {
	var business = new Biz({name: req.body.name, website: req.body.website, type: req.body.type});
	business.save(function (err, business) {
		if (err) {
			res.send({message: err, business: null});
		} else {
			res.send({message: "Business sucessfully added to database.", business: business});
		}
	});
}

function updateBusiness(req, res) {
	Biz.update({name: req.params.name}, {name: req.body.name, website: req.body.website, type: req.body.type}, function (err, updated) {
		if (err) {
			res.send({message: err, updated: null});
		} else {
			res.send({message: "Business updated", updated: updated});
		}
	});
}

function removeBusiness(req, res) {
	Biz.remove({name: req.params.name}, function (err, deleted) {
		if (err) {
			res.send({message: err, deleted: null});
		} else {
			res.send({message: "Business deleted.", deleted: deleted});
		}	
	});
}

// Route middleware that will happen on every request.
router.use(function (req, res, next) {
	
	// Log each request to the console.
	console.log(req.method, req.url);
	
	// Make sure the app go to the next routes and don't stop here.
	next();
});

router.get('/', function (req, res) {
	res.redirect('/business');
});

router.route('/business')

	.get(allBusiness)

	.post(addBusiness);

router.route('/business/:name')
	
	.get(justOneBusiness)

	.put(updateBusiness)

	.delete(removeBusiness);

module.exports = router;