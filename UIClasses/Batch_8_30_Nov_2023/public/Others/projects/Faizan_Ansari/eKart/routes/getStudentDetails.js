var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var studentData = {
    name : 'Faizan',
    age : 20,
    gender : "Male",
    Education : "B.Tech",
    Department : "Computer Science"
  };

  res.send(JSON.stringify(studentData));
});

module.exports = router;
