module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burger_nae: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  });
  return Burgers;
};
