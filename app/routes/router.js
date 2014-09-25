var express = require('express')
,	Biz = require('./../models/biz') 
,	router = express.Router();

function allBusiness(req, res, next) {
	Biz.find({}, function (err, businesses) {
		if (err) {
			next(err);
		} else {
			res.send(businesses);
		}
	});
}

function justOneBusiness(req, res, next) {
	Biz.findOne({name: req.params.name}, function (err, business) {
		if (err) {
			next(err);
		} else {
			res.send(business);
		}
	});
}

function addBusiness(req, res, next) {
	var business = new Biz({name: req.body.name, type: req.body.type, logo: req.body.logo, website: req.body.website});
	business.save(function (err, business) {
		if (err) {
			next(err);
		} else {
			res.send({message: "Business sucessfully added to database.", business: business});
		}
	});
}

function updateBusiness(req, res, next) {
	Biz.update({name: req.params.name}, {name: req.body.name, type: req.body.type, logo: req.body.logo, website: req.body.website}, function (err, updated) {
		if (err) {
			next(err);
		} else {
			res.send({message: "Business updated", updated: updated});
		}
	});
}

function removeBusiness(req, res, next) {
	Biz.remove({name: req.params.name}, function (err, deleted) {
		if (err) {
			next(err);
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