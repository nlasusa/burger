// Import my SQL connection
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", function (err, data) {
            if (err) cb(err, null); 
            cb(null, data); 
        });
    }
};


// Export the orm object for the model
 module.exports = orm; 