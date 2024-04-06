var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 var onLoadDeatails = {
    sliderimages : ['/images/slider/two.jpg'],
    categoryFilterimages:[

    ]
 }
 res.send(JSON.stringify(onLoadDeatails))
});

module.exports = router;
