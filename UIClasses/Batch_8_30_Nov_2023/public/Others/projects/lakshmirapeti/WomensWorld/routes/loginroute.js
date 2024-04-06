var express = require("express");
var router = express.Router();
var { MongoClient } = require("mongodb");
var mongodb = new MongoClient("mongodb://127.0.0.1:27017")
var userdata;

router.post('/', (req, res) => {
  userdata = req.body.params
  getlogindbconnection().then((result) => {
    console.log(result)
    var data = {}
    if (result.length) {
      data.msg = "valid user"
    } else {
      data.msg = "invalid"
    }
    // if (result.user_password != userdata.password) {
    //   data.msg = "inavlid password"
    // }
    res.send(JSON.stringify(data))
  }).catch((error) => {
    console.log(error)
  })
})


async function getlogindbconnection(data) {
  await mongodb.connect();
  var connection = mongodb.db("WomensWorld_Javascript");
  var collection = connection.collection("UseraccountDetails");
  var UseraccountDetails = collection.find({ userid: userdata.userid, user_password: userdata.password }).toArray();
  return UseraccountDetails
}


module.exports = router;