var express = require('express'); // Third Party Module
var spawn = require("child_process").spawn; 
var path = require('path');
const https = require('https');
const fs = require('fs');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname))
app.use(bodyParser.urlencoded({ extended: true })); 
console.log(__dirname)
var key = fs.readFileSync(path.resolve('./selfsigned.key'));
var cert = fs.readFileSync(path.resolve('./selfsigned.crt'));
var options = {
    key: key,
    cert: cert
  };

app.get('/', function (req, res) {
    res.sendFile(path.resolve('../login/login.html'));
});

app.post('/login', function (req, res) {
    user = req.param('user');
    pass = req.param('pass');
    if(pass == "timepass"){
        res.redirect('/landing');
    }
    else{
        res.send('Auth failed');
    }
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

app.get('/landing',function(req,res){
    res.sendFile('landing.component.html',{root:__dirname});
})

var httpsServer = https.createServer(options, app);
httpsServer.listen(3000);