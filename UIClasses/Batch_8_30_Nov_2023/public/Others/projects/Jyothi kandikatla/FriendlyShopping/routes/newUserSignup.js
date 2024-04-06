var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var utilData = require('./monogoCommon');
var mongoClient =utilData.dbConDetails.mongoClient;
var duplicateid = false;
router.post('/', function(req, res, next) {
  var newuserData = {};
  bcrypt.hash(req.body.password,5,function (err,hash){

    // Store hash in your password DB.
    req.body.password = hash;
    getMongoConnection(req.body).then((responce) =>{  
    
    console.log('duplicateid');
    console.log(duplicateid)
    if (duplicateid) {
      newuserData.msg = 'User with same account already exists';
      newuserData.status = 'Error';
  } else {
    newuserData.msg = 'Got signed up successfuly';
    newuserData.status = 'Success';
  }
    res.send(JSON.stringify(newuserData));
    }).catch((err) =>{
        console.log(err);
        newuserData.msg = 'error while connecting  to db';
        newuserData.status = 'Error';

        res.send(JSON.stringify(newuserData));
      })
  });
}) 
   async function getMongoConnection(userData){
     duplicateid = false;

    console.log('userData');
    console.log(userData);
    await mongoClient.connect();
    const db =  mongoClient.db('FriendlyShopping');
    const collection = db.collection('login');
    await collection.find({username:userData.username}).toArray().then((response) =>{
      console.log("response from db");
      console.log(response);
      if (response.length == 1) { // uSER WITH Same account id already exists 
        duplicateid = true;
    } else {
        return collection.insertOne(userData);
    }
    })
   
  }
module.exports = router;