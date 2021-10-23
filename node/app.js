const http = require('http');
var mysql = require('mysql');
const express = require('express');
const path = require('path');
const app = express()

var con = mysql.createConnection({
  host: "database-1.cg8jgzpyr3ex.us-east-2.rds.amazonaws.com",
  name: "dbname",
  user: "admin",
  password: "minecWaft"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'test.html'))
});

http.createServer(app).listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
