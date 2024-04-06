var express = require('express');
var router = express.Router();
var utilData = require('./monogoCommon');//importing the user defined modules
var mongoClient = utilData.dbConDetails.mongoClient;
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("req.session.isValidUser")
  console.log(req.session.isValidUser);
  console.log(req.session);
  var productdetails= [];
  getMongoConnection(req.query).then((response) => {

    res.send(JSON.stringify({details:response}));
  })

});
async function getMongoConnection(userData){//duplicate param
    console.log("userData")//here user data having login credentials
    console.log(userData);
    var reqQuery = {};
    if (userData.productId) {
        reqQuery.productId =  userData.productId;
    }
       await mongoClient.connect();
       const db =  mongoClient.db('FriendlyShopping');
       const collection = db.collection('productData');
       return collection.find(reqQuery).toArray();
   }
module.exports = router;
