var express = require('express');
var router = express.Router();

var mongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb://localhost:27017';
var client = new mongoClient(dbUrl);

router.post('/', (req, resp) => {
    var responseObj = {};
    getDbConnection(req.body)
        .then((response) => {
            
            responseObj.msg = 'data added to userCartDetails collection';
            resp.json(responseObj);
            // resp.send(JSON.stringify(responseObj));
        }).catch((err) => {
            console.log('errr', err);
        })
});

async function getDbConnection(productDetails) {

    const dbName = 'eShoppingWebApp';
    console.log('productDetails ', productDetails)
    await client.connect();
    var db = client.db(dbName);
    var collection = db.collection('userCartDetails');

    var objToFindUser = {};
    objToFindUser[productDetails.userAccountId] = { $exists: true };

    collection.find(objToFindUser).toArray()
        .then((response) => {
            console.log('response : ', response)
            if (response.length) {

                var existingCartDetails = response[0][productDetails.userAccountId];
                existingCartDetails.push(productDetails.prodCartData);

                var newDetails = {};
                newDetails[productDetails.userAccountId] = existingCartDetails;
                return collection.updateOne(
                    { _id: response[0]._id },
                    {
                        $set: newDetails
                    }
                )
            } else { // new entry
                var newDetails = {};
                newDetails[productDetails.userAccountId] = [productDetails.prodCartData];
                return collection.insertOne(newDetails);
            }
        })
}

module.exports = router;