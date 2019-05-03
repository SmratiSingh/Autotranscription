// This file shall contain API calls for MongoDB. All functions are exported
//      in module.exports with or without callbacks.

var MongoClient = require('mongodb').MongoClient;
var Grid = require('mongodb').Grid;

var mongo_url = "mongodb://localhost:27017/";

var db_name = "test1"
var user_table = "users"
var transcripts_table = "transcripts"
var keywords_table = "keywords"

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

module.exports.saveTranscript = function(username, title, text, keywords, timestamp, callback) {
    MongoClient.connect(mongo_url, function(err, db) {
        var dbo = db.db(db_name);
        dbo.collection(transcripts_table).insertOne({'username':username, 'title':title, 'transcript':text, 'keywords':keywords, 'timestamp':timestamp}, function(err, result) {
            if (err) {
                // res.sendStatus(500);
                console.log(err);
                console.log("history saving error");
                throw err;
            }
            db.close();
            callback(result);
        });

    });
};

module.exports.addDomain = function(rows, callback) {
    MongoClient.connect(mongo_url, function(err, db) {
        var dbo = db.db(db_name);
        dbo.collection(keywords_table).insert(rows, function(err, result) {
            if (err) {
                // res.sendStatus(500);
                console.log(err);
                console.log("keywords saving error");
                throw err;
            }
            db.close();
            callback(result);
        });

    });
};

module.exports.checkDomain = function(domain, callback) {
    MongoClient.connect(mongo_url, function(err, db) {
        var dbo = db.db(db_name);
        dbo.collection(keywords_table).find({"Domain":domain}, function(err, result) {
            if (err) {
                // res.sendStatus(500);
                console.log(err);
                console.log("keywords saving error");
                throw err;
            }
            db.close();
            callback(result);
        });

    });
};

module.exports.saveText = function(text, callback) {
    MongoClient.connect(mongo_url, function(err, db) {
        var grid = new Grid(db, 'fs');
        var buffer = new Buffer(text);

        grid.put(buffer, {metadata:{category:'text'}, content_type:'text'}, function(err, fileInfo) {
            if (err) {
                // res.sendStatus(500);
                console.log(err);
                console.log("gridfs text save error");
                throw err;
            }
            callback(fileInfo);
        });
    });
};

module.exports.getUniqueKeywords = function(domain, callback) {
    MongoClient.connect(mongo_url, function(err, db) {
        var dbo = db.db(db_name);
        dbo.collection(keywords_table).distinct("word", {"Domain":domain}, function(err, result) {
            if (err) {
                console.log(err);
                throw err;
            }
            callback(result);
        });
        
    });
};