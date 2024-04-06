var MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');
var utilData = {
    dbConDetails :{
        dbName : "FriendlyShopping",
        mongoClient: client
    }
}
module.exports = utilData;