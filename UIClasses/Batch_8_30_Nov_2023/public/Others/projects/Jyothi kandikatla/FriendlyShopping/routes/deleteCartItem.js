var express = require("express");
var router = express.Router();

var utilData = require("./common");
var mongoClient = utilData.dbConDetails.mongoClient;

/* GET home page. */
router.post("/", function (req, res, next) {
  console.log(req.body);
  var responseObj = {};
  getDBConnection(req.body)
    .then((response) => {
      responseObj.msg = "Delete Item from cart";
      responseObj.status = "Success";
      res.send(JSON.stringify(responseObj));
    })
    .catch((err) => {
      console.log(err);
      responseObj.msg = "Error while deleting";
      responseObj.status = "Error";
      res.send(JSON.stringify(responseObj));
    });
});

async function getDBConnection(productId) {
  await mongoClient.connect();
  var db = mongoClient.db("FriendlyShopping");
  var collection = db.collection("userCartDetails");

  collection.deleteOne("productId: productId").toArray();
}

module.exports = router;
