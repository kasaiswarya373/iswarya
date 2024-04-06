var express = require("express");
var router = express.Router();
var { MongoClient } = require("mongodb");
var mongodb = new MongoClient("mongodb://127.0.0.1:27017")

router.get('/', (req, res) => {
  var products = {}
  getproducts().then((response) => {
    products = response;
    res.send(JSON.stringify(products))
  }).catch((err) => {
    console.log(err)
  })
})

async function getproducts() {
  await mongodb.connect();
  var connection = mongodb.db("WomensWorld_Javascript");
  var collection = connection.collection("welcomepage");
  var result = collection.find({}).toArray();
  return result;
}


module.exports = router