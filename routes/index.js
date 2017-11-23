var express = require('express');
var router = express.Router();

var location = require('../controllers/location');
var others = require('../controllers/other');

/* GET home page. */

router.get('/', function(req, res) {
    res.render('index',{title: 'Home'});
});
router.get('/location', location.locationInfo);
router.get('/location/review/new', location.addReview);
/* Other pages */
router.get('/about', others.about);

module.exports = router;
