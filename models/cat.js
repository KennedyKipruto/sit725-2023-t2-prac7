const client = require("../dbConnection");

var collection = client.db().collection('Cat')

async function postCat(cat, callback) {
    try {
        let doc = await collection.insertOne(cat);
        callback(null, doc)
    } catch (ex) {
        callback(ex, null)
    }


}

async function getAllCats(callback) {
    let catsCollection = await collection.find({}).toArray();
    callback(catsCollection)
}

module.exports = { postCat, getAllCats }