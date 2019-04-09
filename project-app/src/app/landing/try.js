var express = require('express'); // Third Party Module
var spawn = require("child_process").spawn; 
var path = require('path');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname))
app.use(bodyParser.urlencoded({ extended: true })); 


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
app.listen(3000);