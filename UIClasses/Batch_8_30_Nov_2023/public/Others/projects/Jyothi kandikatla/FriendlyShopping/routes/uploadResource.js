var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var resObj = {};
    resObj.msg = 'Success';
    res.send(JSON.stringify(resObj));
});

module.exports = router;
