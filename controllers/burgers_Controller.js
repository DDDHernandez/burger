//Require express
var express = require("express");

var router = express.Router();
//Require burger.js to preform the functions on orm.js
var burger = require("../models/burger.js");


//GET route to get all burgers from database
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//POST route to create a burger in database
router.post("/api/burgers", function(req, res) {
  burger.create([
    "burger", "devoured"
  ], [
    req.body.YourBurger, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

//PUT route to update a burger to devoured state
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no row was changed then 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

//DELETE route to throw away a burger.
router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;

