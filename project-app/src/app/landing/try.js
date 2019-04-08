//var greet = require('./greetings'); // Local Module
var express = require('express'); // Third Party Module
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile('landing.component.html',{root:__dirname});
});

app.post('/login', function (req, res) {
    res.send("ved");
});
app.listen(3000);