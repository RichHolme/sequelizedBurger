var connection = require("../config/connection.js");

var orm = {

	selectAll: function(table, cb){
		var queryString = "SELECT * FROM " + table + ";";
    	connection.query(queryString, function(err, result) {
      		if (err) {
        		throw err;
      		}
      		cb(result);
    	});
	},
	insertOne: function(table, col, nameInput, cb){
		var queryString = "INSERT INTO burgers ( " + col + " ) VALUES ('" + nameInput + "')";
						   // INSERT INTO burgers (burger_name) VALUES ('Big Burger');
		console.log(col, nameInput);
		// var name = nameInput.name;
		// console.log(name);
	    // queryString += "VALUES (";
	    // queryString += nameInput;
	    // queryString += "); ";

	    console.log(queryString);

	    connection.query(queryString, function(err, result) {
	      if (err) {
	        throw err;
	      }

	      cb(result);
	    });
	},
	updateOne: function(table, col, condition, cb) {
		var queryString = "UPDATE burgers";
		// console.log(col.devoured);
	    queryString += " SET ";
	    queryString += col.status + " = " + col.devoured;
	    queryString += " WHERE ";
	    queryString += condition;

	    // console.log(queryString);
	    connection.query(queryString, function(err, result) {
	      if (err) {
	        throw err;
	      }

	      cb(result);
	    });
	  
	}
}

module.exports = orm;