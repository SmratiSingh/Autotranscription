//var greet = require('./greetings'); // Local Module
var express = require('express'); // Third Party Module
var spawn = require("child_process").spawn; 
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile('landing.component.html',{root:__dirname});
});

app.post('/login', function (req, res) {
    res.send("ved");
});

app.get('/keywords', function(req, res){
    resp = req.param('trans')
    var process = spawn('python',["./speech.py", 
                            resp]);
    
    process.stdout.on('data', function(data) { 
        res.send(data); 
    } ) 
    //res.send(resp);
})
app.listen(3000);