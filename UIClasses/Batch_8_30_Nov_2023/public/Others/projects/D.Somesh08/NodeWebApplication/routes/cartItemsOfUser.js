var express = require('express');
var router = express.Router();

var mongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb://localhost:27017';
var client = new mongoClient(dbUrl);

router.get('/', async (req, resp) => {
    var prodIds = [];
    if (req.session.userCartDetails) {
        if (req.session.userCartDetails.length >= 1) {
            prodIds = req.session.userCartDetails.map((item) => {
                return item['productId'];
            })
        }
    }
    await getCartItemsOfAUser(prodIds)
        .then((response) => {
            resp.send(JSON.stringify(response));
        }).catch((err) => {
            console.log("error while getting cart items of a user!", err);
        })
});

var getCartItemsOfAUser = async (prodIds) => {

    var db = 'eShoppingWebApp';
    await client.connect();
    var db = client.db(db);
    var collection = db.collection('ProductDetails');

    var query = { productId: { $in: prodIds } };
    return await collection.find(query).toArray();
}

module.exports = router;