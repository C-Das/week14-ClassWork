var connection = require('./connection.js');

var orm = {
    partiesByCost: function(tableInput) {
        var s = 'SELECT party_name, party_cost FROM ' + tableInput + ' ORDER BY party_cost desc;';
        connection.query(s, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    partiesByName: function(tableInput,partyName) {    
        var s = 'SELECT party_name FROM ' + tableInput + ' WHERE party_name = ?';
        connection.query(s, [partyName], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    clientByMostParties: function(tableOne, tableTwo) {
        var s = 'SELECT client_name, COUNT(client_name) AS count FROM '+tableOne+' LEFT JOIN '+tableTwo+' ON '+tableTwo+'.client_id = '+tableOne+'.id GROUP BY client_name ORDER BY count desc LIMIT 1';
        connection.query(s, function(err, result) {
          if (err) throw err;
            console.log(result);
        });
    }
};
    
module.exports = orm;