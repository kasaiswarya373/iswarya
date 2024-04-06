var express = require('express');
var router = express.Router();

var utilData = require("./common");
var mongoClient = utilData.dbConDetails.mongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  var productList = [];
  getMongoConnection().then((response) => {
    console.log(response);
    res.send(JSON.stringify({details:response}));
    console.log("--- test ---");
    console.log({details:response});
  })
  
});

async function getMongoConnection(userData) { 
   await mongoClient.connect();
   console.log('Connected successfully to server');
   const db = mongoClient.db("eCommerceApp");
   const collection = db.collection("productDetails");
 
   return collection.find({}).toArray();
   
 }

module.exports = router;
