// Import my SQL connection
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: function (cb) {
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
    },

    // Update database
    updateOne: function (condition, id, cb) {
        const sqlQuery = `UPDATE burgers SET devoured = ${condition} WHERE id = ${id}`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data)
        });
    },

    // delete a burger inside the database 
    deleteOne: function (id, cb) {
        var sqlQuery =  `DELETE FROM burgers WHERE id = ${id};`
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err,null);
            cb(null,data)
        });
    }
};


// Export the orm object for the model
 module.exports = orm; 