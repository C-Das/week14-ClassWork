# week14-ClassWork
* The app will render all the data from the database to the HTML using handlebars.
* The app will have 3 buttons 'too hot', 'too cold', and 'just right’
* When the any of the button is clicked, it will save the state of the room temp in the MySQL database with a timestamp and display on the page.

#Week14-Classwork 
You are tasked to create a new App for a new gym that has just opened up, the "Super Clubs Gym". In order to keep tracks of it's members you are to create a web based App that will do the following.

* Create an App using M.V.C structure using callbacks to access the O.R.M.
    * Use Node Express Handlebars App and MySQL database 
    * Create a database name 'gyms_db' with tables structure like below
    * Renders an HTML that let's the user enter a name to add new members
    * Renders all the current users in the database that are active members
    * User can hit a button to update the visit_count of an active member
    * Bonus user can hit a button to delete a member from the database and change it's status so he/she no longer displayed on screen

- super clubs table
|id|member name|active|visit_count|
|--|------|-|-|
|1|Lenny|1|6|
|2|Wendy|1|17|
|3|Mike|0|4|
|4|Ryan|1|153|

## Week14 - Class Work-5
* Create you own Ben and Jerry App:

* Create 5 different kinds of icecream, each with a different price and scale of awesomeness. 
* Put the following variable in your 'index.js'  var icecreams = [ {name: 'vanilla', price: 10, awesomeness: 3}, {name: 'chocolate', price: 4, awesomeness: 8}, {name: 'banana', price: 1, awesomeness: 1}, {name: 'greentea', price: 5, awesomeness: 7}, {name: 'jawbreakers', price: 6, awesomeness: 2}, ]; 
* Do not use MySQL keep all the data in the index.js file
* Using handlebars and Express create a route for each of the ice cream you created
* When the icecreams route is hit, it will render the name, price, and awesomeness of that ice cream.

## Week14 - Class Work-1 Thursday 02/11 

Given the following Js object 'lineage' create Node Express Handlebars App, that will render to HTML the family tree of these three house on one HTML page.
    * Create the Node Express App
    * Do not using MySQL
    * Do not change the Js object 'lineage' in anyway
    * Create the HTML for handlebars to properly render each character by their lineage.

Make sure the name of each house is displayed with an underline and make each house have a different colored text and indented according to generations.

var lineage = {
    lannister: {
        house: 'House Lannister',
        parents: {
            first_parents: 'Joanna & Tywin',
            second_parents: 'Devan & Dorna'
        },
        child: {
            first_child: 'Cersei',
            second_child: 'Jaime',
            third_child: 'Tyrion',
            fourth_child: 'Lancel'
        }
    },
    targaryen: {
        house: 'House Targaryen',
        parents: 'Aerys II & Rhaella',
        child: {
            first_child: 'Rhaegar',
            second_child: 'Viserys',
            third_child: 'Daenerys'
        }
    },
    stark: {
        house: 'House Stark',
        parents: 'Eddard & Catelyn',
        child: {
            first_child: 'Robb',
            second_child: 'Sansa',
            third_child: 'Arya',
            fourth_child: 'Bran',
            fifth_child: 'Rickon'        
        }
    },
};

## Week14 - Class Work-1 Thursday 02/11 - Wish List 

* Create a Node / Express / MYSQL / Handlebars app that is a wish list !! 
* You can add items !! * View the whole list. Delete items you no longer want. 

Funniest design wins!