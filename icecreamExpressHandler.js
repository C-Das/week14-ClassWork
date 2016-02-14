var express = require('express');
var expressHandleBars = require('express-handlebars')
var app = express();
var PORT = process.env.NODE_ENV || 8080;

app.engine('handlebars',expressHandleBars({defaultLayout: 'main'}));
app.set('view engine','handlebars');

var icecreams = [
    {name:'vanila',
     price:10,
     awesomeness:3 },
    {name:'chocolate',
     price:4,
     awesomeness:8 },
    {name:'banana',
     price:1,
     awesomeness:1},
    {name:'greentea',
     price:5,
     awesomeness:7},
    {name:'jawbreakers',
     price:6,
     awesomeness:2}
];

app.get('/icecreams/vanila',function(req,res){
  res.render('menu',icecreams[0])
});

app.get('/icecreams/chocolate',function(req,res){
  res.render('menu',icecreams[1])
});

app.get('/icecreams/banana',function(req,res){
  res.render('menu',icecreams[2])
});

app.get('/icecreams/greentea',function(req,res){
  res.render('menu',icecreams[3])
});

app.get('/icecreams/jawbreakers',function(req,res){
  res.render('menu',icecreams[4])
});

app.listen(PORT,function(){
    console.log("Listening on port %s", PORT);
})