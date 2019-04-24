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

// app.get('/', function (req, res) {
//     res.sendFile(path.resolve('../login/login.html'));
// });
app.use(function (req, res, next) {        
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
    res.setHeader('Access-Control-Allow-Credentials', true);       
    next();  
});  

app.post('/login', function (req, res) {
    user = req.param('username');
    pass = req.param('password');

    mongo.verifyLogin(user, pass, function(document){
        console.log(document);
        if(document == null){res.send('FAIL');}
        else if(pass == document.password) {
            console.log("Login successful for :" + document.username);

            ret_var = { 'firstName': document.firstName, 'lastName': document.lastName, 'username':document.username };
            return res.status(200).json({
                status: 'SUCCESS',
                data: ret_var
            })
        }
        else {
            return res.status(200).json({
                status: 'FAIL',
                message: 'FAIL'
            })
        }
    });
});

app.post('/signup', function (req, res) {
    firstName = req.param('Fuser');
    lastName = req.param('Luser');
    // email = req.param('email')
    nPass = req.param('Npass');
    cPass = req.param('Cpass');
    username = req.param('username');
    if(username == null) {
        // res.send('USER_NULL');
        return res.status(200).json({
            status: 'FAIL',
            message: 'USER_NULL'
        })
    }
    else if(nPass == null || cPass == null) {
        // res.send('PWD_NULL');
        return res.status(200).json({
            status: 'FAIL',
            message: 'PWD_NULL'
        })
    }
    else if(nPass == cPass) {
        mongo.checkUser(username, function(document){
            if(document == null) {
                // add user and redir
                mongo.newUser(username, nPass, firstName, lastName);
                // res.send('ADDED');
                return res.status(200).json({
                    status: 'SUCCESS',
                    message: 'ADDED'
                })
            }
            else {
                // res.send('user '+document.username+' exists!');
                return res.status(200).json({
                    status: 'FAIL',
                    message: 'USER_EXISTS'
                })
            }
        });


        // mongo.newUser(username, nPass, firstName, lastName);
        // res.redirect('/landing');
    }
    else {
        // res.send('password mis-match!');
        return res.status(200).json({
            status: 'FAIL',
            message: 'AUTH_FAIL'
        })
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

// app.get('/landing',function(req,res){
//     res.sendFile('landing.component.html',{root:__dirname});
// })

app.listen(3000)
// var httpsServer = https.createServer(options, app);
// httpsServer.listen(3000);