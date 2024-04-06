var express = require("express");
var router = express.Router();
var { MongoClient } = require("mongodb");
var mongodb = new MongoClient("mongodb://127.0.0.1:27017")
var userresponse = {}

router.post('/post', (req, res) => {
  getdbconnection(req.body).then(() => {
    userresponse.msg = "done";
    res.send(JSON.stringify(userresponse))
  })
})


async function getdbconnection(data) {
  await mongodb.connect();
  var connection = mongodb.db("WomensWorld_Javascript");
  var collection = connection.collection("UseraccountDetails");
  var result = collection.insertOne(data, (err) => {
    return "done";
  })
}


module.exports = router;