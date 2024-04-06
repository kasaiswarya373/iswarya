var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
const mongoClient = require('mongodb').MongoClient;

// Connection URL
const mongoDbUrl = 'mongodb://localhost:27017';
const client = new mongoClient(mongoDbUrl);

router.get('/', (req, resp) => {
    //if client sends data using get(), data comes in *query params(i.e., URL).
    //we can fetch that data at server side using *req.query
    console.log(req.query);

    var userData = { msg: 'success' }
    resp.send(JSON.stringify(userData));
});

router.post('/', (req, resp) => {
    //if client sends data using post(), data comes in *req.body
    var responseObj = {};
    //Steps to connect to mongo DB.
    //step1: create a connect to mongo
    //s2: get the data from db/collection
    //s3: check if that data contains our creadentials.


    //hard coading, while checking user credentials.
    // if (req.body.userCredentials.username == 'test' && req.body.userCredentials.password == 'h123') {
    //     responseObj.message = 'Login successFul';
    // } else {
    //     responseObj.message = 'Oops!, Invalid credentials, please try again!';
    // }

    mongoDBConnection(req.body.userCredentials)
        .then((response) => {
            bcrypt.compare(req.body.userCredentials.password, response[0].password, function (err, result) {

                if (result) {
                    req.session.isValidUser = true;
                    req.session.accountId = req.body.userCredentials.username;
                    responseObj.message = 'Login successFul';
                    console.log(req.session);
                } else {
                    req.session.isValidUser = false;
                    responseObj.message = 'Oops!, Invalid credentials, please try again!';
                }
                resp.send(JSON.stringify(responseObj));
            });

            // if (response.length == 1) {
            //     responseObj.message = 'Login successFul';
            // } else {
            //     responseObj.message = 'Oops!, Invalid credentials, please try again!';
            // }

        })
        .catch(console.error)
        .finally(() => client.close());
});

// Database Name
const dbName = 'eShoppingWebApp';

async function mongoDBConnection(userCredentialsObj) {
    // Use connect method to connect to the server
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('eShoppingWebApp');
    const filteredDocs = await collection.find({ userName: userCredentialsObj.username }).toArray();

    return filteredDocs;
}

module.exports = router;