let express = require('express');
const router = require('./routers/route.js');


let app = express();



let port = process.env.port || 3000;
var collection;

app.use(express.static(__dirname + '/'));
app.use( express.json());
app.use(express.urlencoded({
    extended: false
}));

// Import database connection
require("./dbConnection.js")

app.get('/', (req, res) => {
    res.render('index.html');
});


app.use("/api",router)




app.listen(port, () => {
    console.log('server started');
});
