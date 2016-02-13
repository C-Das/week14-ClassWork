var orm = require('./orm.js');

/* The following commands will run every time once the Node server is started.*/

//Find all animals by name order by price
//orm.selectByPrice('pets');
//SELECT animal_name FROM pets  ORDER BY price desc;

//Find an animal by the name of the animal
orm.clientByMostParties('clients','parties');

//Find the buyer with the most animal
//orm.findBuyerByMostAnimal('pet_buyers','pets');