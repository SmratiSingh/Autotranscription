var express = require('express'); // Third Party Module
var spawn = require("child_process").spawn; 
var path = require('path');
var mongo = require('../../assets/mongoFun')
const https = require('https');
const fs = require('fs');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname))
app.use(bodyParser.urlencoded({ extended: true })); 
console.log(__dirname)
// var key = fs.readFileSync(path.resolve('./selfsigned.key'));
// var cert = fs.readFileSync(path.resolve('./selfsigned.crt'));
// var options = {
//     key: key,
//     cert: cert
//   };

app.get('/', function (req, res) {
    res.sendFile(path.resolve('../login/login.html'));
});

app.post('/login', function (req, res) {
    user = req.param('user');
    pass = req.param('pass');

    mongo.verifyLogin(user, pass, function(document){
        console.log(document);
        if(document == null){res.send('Login failed');}
        else if(pass == document.password) {
            console.log("Login successful for :" + document.username);
            res.redirect('/landing');
        }
        else {
            res.send('Login failed');
        }
    });
});

app.post('/signup', function (req, res) {
    firstName = req.param('Fuser');
    lastName = req.param('Luser');
    nPass = req.param('Npass');
    cPass = req.param('Cpass');
    username = req.param('username');
    if(username == null) {
        res.send('Username field is empty');
    }
    else if(nPass == null || cPass == null) {
        res.send('Password field is empty');
    }
    else if(nPass == cPass) {
        mongo.checkUser(username, function(document){
            if(document == null) {
                // add user and redir
                mongo.newUser(username, nPass, firstName, lastName);
                res.redirect('/landing');
            }
            else {
                res.send('user '+document.username+' exists!');
            }
        });


        // mongo.newUser(username, nPass, firstName, lastName);
        // res.redirect('/landing');
    }
    else {
        res.send('password mis-match!');
    }
    // TODO: Add checks for first name and last name.

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

app.listen(3000)
// var httpsServer = https.createServer(options, app);
// httpsServer.listen(3000);