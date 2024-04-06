var MongoClient = require('mongodb').MongoClient;

const client = new MongoClient('mongodb://localhost:27017');

// async function getMongoConnection(userData, collectionName, pageType) {

//   await mongoClient.connect();
//   console.log('Connected successfully to server');
//   const db = mongoClient.db(collectionName);
//   const collection = db.collection("userAccountDetails");
//   if (pageType == 'login') {
//     return collection.find({ accountId: userData.userId, password: userData.password }).toArray();
//   } else if (pageType == 'newSignup') {
//     return collection.insertOne(userData);
//   }
// }

var utilData = {
  dbConDetails: {
    dbName: 'eCommerceApp',
    dbUrl: 'mongodb://localhost:27017',
    mongoClient: client,
    // getMongoConnection:(data,colName,pageType) => {
    //   return getMongoConnection(data,colName,pageType);
    // }
  }

}

module.exports = utilData;