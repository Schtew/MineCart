const http = require('http');
var mysql = require('mysql');
const express = require('express');
const path = require('path');
const app = express()

var con = mysql.createConnection({
  host: "database-1.cg8jgzpyr3ex.us-east-2.rds.amazonaws.com",
  database: "dbname",
  user: "admin",
  password: "minecWaft"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT * FROM users";
  con.query(sql, function(err, res, fields) {
    if (err) throw err;
    console.log(res);
  });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'test.html'))
});

app.get('/test', (req, res) => {
    res.json({ message: "Hello from server!" });
});

http.createServer(app).listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
