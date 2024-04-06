var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');

var utilData = require("./common");
var mongoClient = utilData.dbConDetails.mongoClient;

router.post('/', function (req, res, next) {
  // for POST it should be req.body
  console.log(req.body);
  var responseObj = {};

  getMongoConnection(req.body).then((response) => {

    bcrypt.compare(req.body.password, response[0].password, function (err, result) {

      console.log(req.body.password);
      
      //   if(result){
      //     responseObj.msg = 'Valid';
      // }else{
      //     responseObj.msg = 'Invalid';
      // }
      responseObj.msg = result ? 'Valid' : 'Invalid';

      res.send(JSON.stringify(responseObj));

    });

  }).catch((error) => {
    responseObj.msg = 'Error while connecting to database';
  })

});

async function getMongoConnection(userData) {
  console.log("user" + userData);
  await mongoClient.connect();
  console.log('Connected successfully to server');
  const db = mongoClient.db("eCommerceApp");
  const collection = db.collection("userAccountDetails");
  return collection.find({ accountId: userData.userId }).toArray();
}
module.exports = router;
