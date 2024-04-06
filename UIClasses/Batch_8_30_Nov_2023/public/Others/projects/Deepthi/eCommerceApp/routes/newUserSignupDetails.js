var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');

var utilData = require("./common");
var mongoClient = utilData.dbConDetails.mongoClient;

var duplicateId = false;
/* Post home page. */
router.post('/', function (req, res, next) {
  console.log('response from signup page');
  console.log(req.body);
  var responseObj = {};

  bcrypt.hash(req.body.password, 3, function (err, hash) {
    req.body.password = hash;

    getMongoConnection(req.body).then(() => {
      console.log("duplicate id:");
      console.log(duplicateId);
      if (duplicateId) {
        responseObj.msg = 'User with same account already exists';

      } else {
        responseObj.msg = 'Success';

      }

      res.send(JSON.stringify(responseObj));

    }).catch((error) => {
      console.log(error);
      responseObj.msg = 'Error while inserting the data';
      res.send(JSON.stringify(responseObj));
    })
  });

});

async function getMongoConnection(userData) {
   console.log('userData');
  console.log(userData);
  duplicateId = false;

  await mongoClient.connect();
  console.log('Connected successfully to server');
  const db = mongoClient.db("eCommerceApp");
  const collection = db.collection("userAccountDetails");

  await collection.find({accountId: userData.accountId}).toArray().then((response) => {
    console.log(response);
    if (response.length == 1) {
      duplicateId = true;
    } else {
      return collection.insertOne(userData);
    }   
  })
  
}
module.exports = router;
