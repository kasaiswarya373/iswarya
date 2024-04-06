var express = require('express');
var router = express.Router();

var mongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017';
var client = new mongoClient(dbUrl);

router.get('/', (req, resp) => {
    getCartItemsCount(req.query).then((response) => {
        var responseObj = {};
        if (response.length >= 1) {
            responseObj.count = response[0][req.query.userAccountId].length;

            req.session.userCartDetails = response[0][req.session.accountId];
        }
        else {
            responseObj.count = 0;
        }
        resp.send(JSON.stringify(responseObj));
    }).catch((err) => {
        console.log("err while getting items count in the cart ", err);
    });
});

async function getCartItemsCount(userAccountId) {
    var db = 'eShoppingWebApp';
    await client.connect();
    var db = client.db(db);
    var collection = db.collection('userCartDetails');
    var isUserExistWithRecords = {};
    isUserExistWithRecords[userAccountId.userAccountId] = { $exists: true };
    return await collection.find(isUserExistWithRecords).toArray();

}

module.exports = router;