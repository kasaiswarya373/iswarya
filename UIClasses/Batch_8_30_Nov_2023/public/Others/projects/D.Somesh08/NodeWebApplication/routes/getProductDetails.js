var express = require('express');
var router = express.Router();

var mongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017';
var client = new mongoClient(dbUrl);

router.get('/', (req, resp) => {
    
    getProductDetailsFromDb(req.query)
        .then((response) => {
            resp.send(JSON.stringify(response));
        }).catch((err) => {
            console.log('error getting prod details form db ', err);
        });
});

var getProductDetailsFromDb = async (paramsData) => {
    var reqQuery = {};
    if(paramsData.pid){
        reqQuery.productId = paramsData.pid;
    }

    const dbName = 'eShoppingWebApp';
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('ProductDetails');
    return await collection.find(reqQuery).toArray();

}

module.exports = router;