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

// get to find ALL burgers (for devoured)
router.get('/all', (req, res) => {
    orm.selectAll(function (error, burgers) {
        if (error) {
            return res.status(501).json({
                message: "Unable to access the database"
            });
        }
        res.render("allBurgers", { burgers, style: "all" }); 
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

// PUT 
router.put('/:id/:value', function (req, res) {
    var id = req.params.id; 
    var value = JSON.parse(req.params.value);

    orm.updateOne(value, id, function (error, burger) {
        if (error) {
            return res.status(501).json({
                message: "Unable to devour your burger"
            });
        }
        return res.json({
            id: id 
        });
     });
 });

// DELETE posts 
 router.delete("/delete/:id", (req, res) => {
     var id = req.params.id; 

     orm.deleteOne(id, function(err, burger) {
        if (err) {
            return res.status(501).json({
                message: "Unable to delete burger"
            });
        }

        return res.json({
            id
        });
     });
 });

// Export routes for server.js to use.
module.exports = router;