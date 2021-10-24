const http = require('http');
var mysql = require('mysql');
const express = require('express');
const path = require('path');
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

var con = mysql.createConnection({
  host: "database-1.cg8jgzpyr3ex.us-east-2.rds.amazonaws.com",
  database: "dbname",
  user: "admin",
  password: "minecWaft"
});

function reqUserData(id, Callback) {
    // let userData = {username: 'test', currency: -1};
    username = "test";
    currency = -1;
    // con.connect(function(err) {
    //   if (err) throw err;
    //   console.log("Connected!");
    //   var sql = "SELECT * FROM users WHERE uuid=" + id;
    //   con.query(sql, function(err, res, fields) {
    //     if (err) throw err;
    //     let userData = {username: res[0].user_name, currency: res[0].currency};
    //     username = res[0].user_name;
    //     currency = res[0].currency;
    //     console.log(username);
    //     // return userData;
    //     // userData.username = res
    //   });
    // });
    var sql = "SELECT * FROM users WHERE user_name='" + id + "'";
    con.query(sql, function(err, res, fields) {
        if (err) throw err;
        console.log(res[0]);
        let userData = {username: res[0].user_name, currency: res[0].currency, cur_prog: res[0].curr_prog, cur_quest: res[0].curr_quest};
        // username = res[0].user_name;
        // currency = res[0].currency;
        // console.log(username);
        Callback(userData);
        // return userData;
        // userData.username = res
      });

    // console.log(username);
    // console.log(currency);
    // console.log(userData);
    // return userData;
}

function resetUserQuests(id) {
    var sql = "UPDATE users SET curr_quest=0, curr_prog=0, currency=currency+100 WHERE user_name='" + id + "'";
    con.query(sql, function(err, res, fields) {
        if (err) throw err;
      });

}

function resetUserBalance(id) {
    var sql = "UPDATE users SET currency=0 WHERE user_name='" + id + "'";
    con.query(sql, function(err, res, fields) {
        if (err) throw err;
      });

}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'test.html'))
});

app.get('/test', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post('/getUser', (req, res) => {
    console.log(req.body);
    var userID = req.body.userData;
    console.log("USER: ", userID.id);
    reqUserData(userID.id, function(data) {
        console.log(data);
        res.json(data);
    });
    // console.log(userData);
    // res.json({ message: "Hello from server!" });

});

app.post('/resetQuests', (req, res) => {
    console.log(req.body);
    var userID = req.body.userData;
    console.log("USER: ", userID.id);
    resetUserQuests(userID.id);

});

app.post('/resetBalance', (req, res) => {
    console.log(req.body);
    var userID = req.body.userData;
    console.log("USER: ", userID.id);
    resetUserBalance(userID.id);

});

http.createServer(app).listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
