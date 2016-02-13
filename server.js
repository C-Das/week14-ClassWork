var express = require('express');
var mysql = require('mysql');
var PORT = process.env.NODE_ENV || 8080;

var app = express();

var connection = mysql.createConnection ({
    PORT:3306,
    host:'localhost',
    user:'root',
    database:'feel_state_db'
});

connection.connect(function(err){
  if(err){
    throw err;
  }
  console.log("connected as id %s",connection.thereadId);
});

app.get('/',function(req,res){
    connection.query('select * from feel_states',function(err,results){
        res.send(results);
        // console.log(results);
    });
})

app.listen(PORT,function(){
  console.log("App is listening on PORT %s", PORT);
});