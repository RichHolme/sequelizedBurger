var express = require("express");

var router = express.Router();

var burgers = require("../models/burgers.js");

router.get("/", function(req, res) {
  burgers.all(function(data) {
    var burgersObject = {
      burgers: data
    };
    // console.log(burgersObject);
    res.render("index", burgersObject);
  });
});

router.post("/api/burgers", function(req, res) {
  // console.log("working");
  console.log(req.body.name);
  burgers.create([
    "burger_name"
  ], [
    req.body.name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  burgers.update(
    {
      status: req.body.status,
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

module.exports = router;