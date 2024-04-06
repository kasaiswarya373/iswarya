var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var onLoadDetails = {
        sliderImages : ['/images/slider/slide1.webp']
    }
    res.send(JSON.stringify(onLoadDetails))
});

module.exports = router;
