var mysql = require('mysql');
var PORT = process.env.NODE_ENV || 8080;

var connection = mysql.createConnection ({
    PORT:3306,
    host:'localhost',
    user:'root',
    database:'holiday_party_db'
});

connection.connect(function(err){
  if(err){
    throw err;
  }
});

// app.listen(PORT,function(){
//   console.log("App is listening on PORT %s", PORT);
// });

module.exports = connection;