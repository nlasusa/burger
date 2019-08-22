var express = require("express");
var router = express.Router();

var orm = require("../config/orm.js"); 

router.get("/", function (req, res) {
    orm.selectAll(function (error, burgers) {
        if (error) {
            return res.status(501).json({
                message: "Unable to access the database"
            });
        }
        console.log("Burgers: ", burgers); 
        res.render("index" ,{ burgers, style: "index" }); 
    });
}); 

// Export routes for server.js to use.
module.exports = router;