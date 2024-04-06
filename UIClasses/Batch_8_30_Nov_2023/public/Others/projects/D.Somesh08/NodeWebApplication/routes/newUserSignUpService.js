const express = require('express');
const router = express.Router();

var bcrypt = require('bcryptjs');
const mongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017';
const client = new mongoClient(dbUrl);


router.post('/', (req, resp) => {
    saveDataIntoDB(req.body)
        .then((response) => {
            resp.send(JSON.stringify(response));
        })
        .catch((err) => { console.log("500 internal while saving user to db") })
        .finally(() => client.close());;
});

var saveDataIntoDB = async (userDetails) => {
    var isExist = false;
    var saltRounds = 5;
    var dbResponseObj = {};

    bcrypt.hash(userDetails.password, saltRounds, function (err, hashedPasswordAfterEncryption) {
        // Store hash in your password DB.
        userDetails.password = hashedPasswordAfterEncryption;
    });

    await client.connect();

    const db = client.db('eShoppingWebApp');
    const collection = db.collection('eShoppingWebApp');

    await collection.find({ userName: userDetails.userName }).toArray().then((userData) => {
        if (userData.length >= 1) {
            isExist = true;
        }
    });
    if (isExist) {
        dbResponseObj.message = "user with same id already exists";
        dbResponseObj.isExist = true;
        return dbResponseObj;
    } else {
        await collection.insertOne(userDetails);
        dbResponseObj.message = 'user registered successfully';
        dbResponseObj.isExist = false;
        return dbResponseObj;
    }
}

module.exports = router;
