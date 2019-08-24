// Set up MySQL connection
var mysql = require("mysql");

connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "classy43",
  database: "burgers_db"
});

connection.connect(); 

 // Export connection for our ORM to use.
module.exports = connection;