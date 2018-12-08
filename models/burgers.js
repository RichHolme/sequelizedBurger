module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
  }, {
	  timestamps: false
	});
  return Burgers;
};
