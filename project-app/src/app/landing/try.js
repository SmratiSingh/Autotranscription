process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
var express = require('express'); // Third Party Module
var spawn = require("child_process").spawn; 
var exec = require("child_process").exec; 
var cors = require('cors');
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
// var key = fs.readFileSync(path.resolve('./src/app/landing/server.key'));
// var cert = fs.readFileSync(path.resolve('./src/app/landing/server.crt'));
// var options = {
//     key: key,
//     cert: cert
//   };

app.use(function (req, res, next) {        
    res.setHeader('Access-Control-Allow-Origin', '*');    
    // res.setHeader('Access-Control-Allow-Methods', '*');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
    // res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');      
    res.setHeader('Access-Control-Allow-Credentials', true);       
    next();  
});  

app.get('/', function (req, res) {
    res.send('ping from node server');
});

app.post('/login', function (req, res) {
    user = req.param('username');
    pass = req.param('password');
    console.log(user+pass);
    mongo.verifyLogin(user, pass, function(document){
        console.log(document);
        console.log("authenticating");
        if(document == null || document.length==0){res.send('FAIL');}
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
    // firstName = req.param('first_name');
    // lastName = req.param('last_name');
    // // email = req.param('email')
    // nPass = req.param('new_password');
    // cPass = req.param('re_password');
    // username = req.param('username');
    firstName = req.body.first_name;
    lastName = req.body.last_name;
    nPass = req.body.new_password;
    cPass = req.body.re_password;
    username = req.body.username;
    // console.log("Signup Function");
    // console.log(req.body);
    // console.log(req.body.first_name);
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
                console.log("Signup successful for :" + username);
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
                });
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
        });
    }
    // TODO: Add checks for first name and last name.

});

app.get('/keywords', function(req, res){
    console.log('inside keywords');
    resp = req.param('trans')
    var process = spawn('python36',["./src/app/landing/speech.py", 
                            resp]);
    console.log('process created');
    process.stdout.on('data', (data) => { 
        console.log('data is: '+data);
        res.send(data); 
    } )
    // exec(`python36 ./src/app/landing/speech.py ${resp}` , (error,stdout,stderr) => {
    //     if(error){
    //         console.log('error occured');
    //         console.log(error);
    //     }
    //     console.log('prining');
    //     console.log(stdout);
    //     res.send(stdout);
    // })
    //res.send(resp);
});

app.post('/transcript', function(req, res){
    
    console.log('save data is: '+ JSON.stringify(req));
    username = req.body.username;
    trans_text = req.body.text;
    keywords = req.body.keywords;
    // title = req.body.title;
    // timestamp = new Date().toISOString().replace(/[-:.Z]/g, "").replace("T","_");
    timestamp = new Date().toISOString();

    // recieved_key = ""

    mongo.saveText(trans_text, function(fileInfo) {
        console.log(fileInfo);
        recieved_key = fileInfo._id;
        // mongo.saveTranscript(username, title, recieved_key, keywords, timestamp, function(result){
        mongo.saveTranscript(username , recieved_key, keywords, timestamp, function(result){
            return res.status(200).json({
                status: 'SUCCESS',
                message: 'ROW_ADDED',
                id: result['insertedId']
            });
        });
    });

    // mongo.getUniqueKeywords(domain, function(result){
    //     key_list = keywords.split(",");
    //     rows = [];
    //     for (var i = 0; i < key_list.length; i++){
    //         if (result.indexOf(key_list[i]) < 0) {
    //             rows.push({"Domain":domain, "word":key_list[i].trim(), "confidence" : 0.5});
    //         }
    //     }

    //     mongo.addDomain(rows, function(results){
    //         return res.status(200).json({
    //             status: 'SUCCESS',
    //             message: 'ROWS_ADDED'
    //         });
    //     });

    // });

})

app.post('/domain', function(req, res) {
    domain = req.body.domain.toLowerCase().trim();
    keywords = req.body.keywords;

    rows = [];

    mongo.checkDomain(domain, function(results){
        if (results == null) {
            key_list = keywords.split(",");
            for (var i = 0; i < key_list.length; i++){
                rows.push({"Domain":domain, "word":key_list[i].trim(), "confidence" : 0.5});
            }

            mongo.addDomain(rows, function(results){
                return res.status(200).json({
                    status: 'SUCCESS',
                    message: 'ROWS_ADDED'
                });
            });
        }
        else {
            return res.status(200).json({
                status: 'FAIL',
                message: 'DOMAIN_EXISTS'
            });
        }
    });

});

app.post('/update', function(req, res) {
    // title = req.body.title;
    keywords = req.body.keywords;
    title = req.body.title;
    _id = req.body._id;

    mongo.updateSession(_id, title, keywords, function(results) {
        if (results.nModified > 0) {
            return res.status(200).json({
                status: 'SUCCESS',
                message: 'DATA_MODIFIED'
            });
        }
        else {
            return res.status(200).json({
                status: 'SUCCESS',
                message: 'DATA_MODIFIED_MAYBE'
            });
        }
    });

    // mongo.getUniqueKeywords(domain, function(result){
    //     key_list = keywords.split(",");
    //     rows = [];
    //     for (var i = 0; i < key_list.length; i++){
    //         if (result.indexOf(key_list[i]) < 0) {
    //             rows.push({"Domain":domain, "word":key_list[i].trim(), "confidence" : 0.5});
    //         }
    //     }

    //     mongo.addDomain(rows, function(results){
    //         return res.status(200).json({
    //             status: 'SUCCESS',
    //             message: 'ROWS_ADDED'
    //         });
    //     });

    // });

});

app.listen(3000)
// var httpsServer = https.createServer(options, app);
// httpsServer.listen(3000);
