var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
const { response } = require('express');
var app = express();

var jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.json({success:true})
})


app.post('/add', function(req, res){
    console.log(req.body.link)

    
    var array = JSON.parse(fs.readFileSync(__dirname+'/data.json', 'utf8'));
    array.push({
        "link": req.body.link,
        "newLink": req.body.newLink
    })
    console.log('Added')
    console.log(array)
    var jsonArray = JSON.stringify(array);
    fs.writeFileSync(__dirname+'/data.json', jsonArray, { encoding: 'utf8', flag: 'w' });
    res.json({success:true})

})

app.listen(3001);