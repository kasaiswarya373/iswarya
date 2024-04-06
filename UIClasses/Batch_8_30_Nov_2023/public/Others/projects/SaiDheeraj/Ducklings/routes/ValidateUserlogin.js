var express = require('express');
var router = express.Router();

const MongoClient = require("mongodb").MongoClient;   /* creating a object frm the "MongoClient" which is cmg frm the "mongodb node module". */
const mongoDBUrl = "mongodb://localhost:27017";      // for that we decalring mongodb port number; ie: "mongodb url"
const Client = new MongoClient(mongoDBUrl);         // now we should specify mongodburl in the Client

router.post('/', function(req, res, next) {
    var validResponseObj = {};

    getMongodbConnection().then((Response) => {
        console.log("Response");
        console.log(Response);
    }).catch((error) => {
       // console.log(error);
        validResponseObj.msg = 'Error while connecting to database';
    })


  /*  if (req.body.accountId == 'Dheeraj_user' && req.body.accountpassword == 'sai2905') {
        validResponseObj.msg = "Valid";
    } else {
        validResponseObj.msg = "Invalid";
    } */


    res.send(JSON.stringify(validResponseObj));
});


async function getMongodbConnection () {
    await Client.connect();
    const db = Client.db("KidsShoppingApp");
    const collection = db.collection("UserAccountDetails");
    return collection.find({}).toArray();  // this line will find the userDetails and "convert them into an array"
}
module.exports = router;
