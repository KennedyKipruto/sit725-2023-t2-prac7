const { MongoClient,ServerApiVersion} = require("mongodb");

const uri = "mongodb+srv://Kennedy:MongoDb123@cluster0.wx0iciv.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});


client.connect();
console.log("Database Connected");

module.exports = client
