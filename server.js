let express = require('express');
const { MongoClient,ServerApiVersion} = require("mongodb");


let app = express();

const uri = "mongodb+srv://Kennedy:MongoDb123@cluster0.wx0iciv.mongodb.net/?retryWrites=true&w=majority"

let port = process.env.port || 3000;
var collection;

app.use(express.static(__dirname + '/'));
app.use( express.json());
app.use(express.urlencoded({
    extended: false
}));

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});


async function connectDB() {
    try {
        // connect the client to mongoDB server
        await client.connect();
        collection = client.db().collection('Cat');
        console.log("Connected to Database");
    }
    catch (ex) {
        console.error(ex);
    }
};



app.get('/', (req, res) => {
    res.render('index.html');
});


app.get('/api/cats', async (req, res) => {
    getAllCats((result) => {
            res.json({
                statuscode: 200,
                data: result,
                message: 'success'
            });

    });
});


app.post('/api/cat', (req, res) => {
    let cat = req.body;
    postCat(cat, (err, result) => {
        if (!err) {
            res.json({
                statuscode: 201,
                data: result,
                message: 'success'
            });
        }
    });
});

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


app.listen(port, () => {
    console.log('server started');
    connectDB()
});
