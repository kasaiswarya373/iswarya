var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {

// // GET req.query // user sends data through get communication
// console.log(req.query);

//   var responseObj = {"msg":"success"}

//   res.send(JSON.stringify(responseObj))
// });

router.post('/', function(req, res, next) {

    // POST req.body // user sends data through post communication
    console.log(req.body);
    
      var responseObj = {}

      if(req.body.userName == "mamba@gmail.com" && req.body.userPass == "kobe@#24" ){
        responseObj.msg = "Valid"
      }else{
        responseObj.msg = "Invalid"

      }
    
      res.send(JSON.stringify(responseObj))
    });

module.exports = router;
