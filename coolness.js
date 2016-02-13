var express = require('express');
var mysql = require('mysql');
var app = express();
var PORT = process.env.NODE_ENV || 8080;

var connection = mysql.createConnection ({
    PORT:3306,
    host:'localhost',
    user:'root',
    database:'coolness'
});

connection.connect(function(err){
  if(err){
    throw err;
  }
  console.log("connected as id %s",connection.thereadId);
});

app.get('/cast',function(req,res){
    connection.query('select name from coolness_points order by id',function(err,results){
        res.send(results);
    });
})

app.get('/coolness-chart',function(req,res){
    connection.query('select name, from coolness_points order by id',function(err,results){
        res.send(results);
    });
})

// app.get('/attitude-chart/:type',function(req,res){
//     connection.query('select * from feel_states',function(err,results){
//         res.send(results);
//     });
// })

app.listen(PORT,function(){
  console.log("App is listening on PORT %s", PORT);
});