// This file shall contain API calls for MongoDB. All functions are exported
//      in module.exports with or without callbacks.

var MongoClient = require('mongodb').MongoClient;

var mongo_url = "mongodb://localhost:27017/";

var db_name = "test1"
var user_table = "users"
var transcripts_table = "transcripts"

module.exports.verifyLogin = function(username, pwd, callback){
    MongoClient.connect(mongo_url, function(err, db) {

        var dbo = db.db(db_name);

        dbo.collection(user_table).findOne({'username': username, 'password': pwd}, function(err, document) {
            if (err) {
                // res.sendStatus(500);
                throw err;
            }
            db.close();
            // console.log(document);
            callback(document);
        });
    });
};

module.exports.newUser = function(username, pwd, fname, lname){
    MongoClient.connect(mongo_url, function(err, db) {

        var dbo = db.db(db_name);

        console.log(username, pwd, fname, lname);

        dbo.collection(user_table).insertOne({'firstName':fname, 'lastName':lname, 'username': username, 'password': pwd}, function(err, res) {
            if (err) {
                // res.sendStatus(500);
                console.log(err);
                console.log("add user error");
                throw err;
            }
            db.close();
        });
    });
};

module.exports.checkUser = function(username, callback){
    MongoClient.connect(mongo_url, function(err, db) {

        var dbo = db.db(db_name);

        dbo.collection(user_table).findOne({'username': username}, function(err, document) {
            if (err) {
                // res.sendStatus(500);
                // console.log(err);
                console.log("check user error");
                throw err;
            }
            db.close();
            // console.log(document);
            callback(document);
        });
    });
};

module.exports.saveTranscript = function() {
    MongoClient.connect(mongo_url, function(err, db) {
        var dbo = db.db(db_name);
        dbo.collection(user_table).insertOne(foo, function(err, result) {
            if (err) {
                // res.sendStatus(500);
                console.log(err);
                console.log("add user error");
                throw err;
            }
            db.close();
        });

    });
};