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

app.get('/:link', function(req, res){
    var users = JSON.parse(fs.readFileSync(__dirname+'/data.json', 'UTF-8'));
    var user = users.find(u => u.newLink === req.params.link);
    res.redirect(user.link)
})

app.post('/add', function(req, res){
    console.log(req.body.link)
    if (req.body.link.includes('https')) {
        var array = JSON.parse(fs.readFileSync(__dirname+'/data.json', 'utf8'));
        const result = array.find(u => u.link === req.body.link);
        console.log(result)
        if (result === undefined) {
            array.push({
                "link": req.body.link,
                "newLink": req.body.newLink
            })
            console.log('Added')
            console.log(array)
            var jsonArray = JSON.stringify(array);
            fs.writeFileSync(__dirname+'/data.json', jsonArray, { encoding: 'utf8', flag: 'w' });
            res.json({success:true})
        }
        else {
            res.json({success:false})
        }

    }
    else {
        console.log('Not Link')
    }
    


})

app.listen(3001);