// Import my SQL connection
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", function (err, data) {
            if (err) cb(err, null); 
            cb(null, data); 
        });
    },

    // add burger inside database 
    insertOne: function (burgerName, cb) {
        var sqlQuery = `INSERT INTO burgers (burger_name) VALUES('${burgerName}')`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    }
  };

   

// Export the orm object for the model
 module.exports = orm; 