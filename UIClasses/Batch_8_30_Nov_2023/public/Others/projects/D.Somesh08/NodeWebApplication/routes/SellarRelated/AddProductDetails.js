var express = require('express');
var router = express.Router();

var mongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb://localhost:27017';
var client = new mongoClient(dbUrl);

router.get('/', (req, resp) => {

    var respObj = {};
    saveToDB(req.query).then((response) => {
        respObj.msg = 'product details inserted successfully';
        resp.json(respObj);
    }).catch((err) => {
        console.log('Err at server side, while saving seller product details to db', err);
    })
});

var saveToDB = async (productDetails) => {
    var dbName = 'eShoppingWebApp';
    await client.connect();

    var db = client.db(dbName);
    var collection = db.collection('ProductDetails');
    return await collection.insertOne(productDetails);
}
module.exports = router;
