var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // GET request.query
  console.log(req.query);
  var responseObj = {msg: 'success'};

  res.send(JSON.stringify(responseObj));
});

module.exports = router;
