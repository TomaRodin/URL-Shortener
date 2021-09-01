var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

var jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.json({success:true})
})


app.post('/add',jsonParser, function(req, res){
    console.log(req.body.title)
    
    var array = JSON.parse(fs.readFileSync(__dirname+'/data.json', 'utf8'));
    array.push({
        "link": req.body.body,
        "newLink": req.body.newLink
    })
    console.log('Added')

    var jsonArray = JSON.stringify(array);
    fs.writeFileSync('./data.json', jsonArray, { encoding: 'utf8', flag: 'w' });
    res.json({success:true})
})

app.listen(3001);