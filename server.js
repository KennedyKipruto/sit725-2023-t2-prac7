let express =require('express');

let app= express();

let port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/',(req,res)=>{
    res.render('index.html');
});

app.get('/addTwoNumbers', (req,res)=>{
    let num1= parseInt(req.query.num1);
    let num2=parseInt(req.query.num2);

    let result =num1 + num2;

    let obj={statusCode:200, massage:'success', data:result}

    //then send back
    res.json(obj);
});
app.get('/subtractTwoNumbers', (req,res)=>{
    let num1= parseInt(req.query.num1);
    let num2=parseInt(req.query.num2);

    let result =num1 - num2;

    let obj={statusCode:200, massage:'success', data:result}

    //then send back
    res.json(obj);
});

app.get('/divideTwoNumbers', (req,res)=>{
    let num1= parseInt(req.query.num1);
    let num2=parseInt(req.query.num2);

    let result =num1 / num2;

    let obj={statusCode:200, massage:'success', data:result}

    //then send back
    res.json(obj);
});

app.get('/multiplyTwoNumbers', (req,res)=>{
    let num1= parseInt(req.query.num1);
    let num2=parseInt(req.query.num2);

    let result =num1 * num2;

    let obj={statusCode:200, massage:'success', data:result}

    //then send back
    res.json(obj);
});

app.listen(port,()=>{
    console.log('server started');
});