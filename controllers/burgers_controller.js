var express = require("express");
var router = express.Router();

var orm = require("../config/orm.js"); 

// GET 
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

// POST 
router.post('/add', (req, res) => {

    var burgerName = req.body.burger_name; 
    orm.insertOne(burgerName, function (error, burger) {
        if (error) {
            return res.status(401).json({
                message: "issue with adding the burger"
            });
        }

        return res.json({
            burger_name: burgerName,
            id: burger.insertId,
            devoured: 0 
        });
    });

});

// Export routes for server.js to use.
module.exports = router;