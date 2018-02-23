var orm = require("../config/orm.js");

 var burger = {
  all: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },

  create: function(req, callback)
  {
  	orm.insertOne("burgers", function(req, res) {
  		callback(res);
  	});
  },

  update: function(objColVals, condition, callback) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      callback(res);
    });
  }
  
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;