var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  var studentDetails = {
    name: "Ashish",
    age: 35,
    gender: "Male",
  };
  res.send(JSON.stringify(studentDetails));
});

module.exports = router;
