var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/", function(req, res) {
   db.Burgers.findAll({}).then(function(dbBurgers) {
      // console.log(dbBurgers)
      let burgerObj = {};
      let burgers = [];
      for (var i = 0; i < dbBurgers.length; i++){
        let burger = {};
        burger.burger_name = dbBurgers[i].dataValues.burger_name
        burger.devoured = dbBurgers[i].dataValues.devoured
        burger.id =  dbBurgers[i].dataValues.id

        burgers.push(burger)
      }

      console.log(burgers)
      burgerObj.burgers = burgers
      console.log('route hit')
      res.render("index", burgerObj);
    });
  });

  app.put("/api/burgers/:id", function(req, res) {
      console.log(req.body)
     db.Burgers.update({
        devoured: req.body.devoured
      }, {
        where: {
          id: req.params.id
        }
      }).then(function(dbBurgers) {
        location.reload();
      })
      .catch(function(err) {
       
        res.json(err);
      });
  });

  app.post("/api/burgers", function(req, res) {

      db.Burgers.create({
        burger_name: req.body.name,
        devoured: false
      }).then(function(dbTodo) {

        location.reload();
      })
      .catch(function(err) {
       
        res.json(err);
      });
  });
};