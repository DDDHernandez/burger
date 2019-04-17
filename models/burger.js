var orm = require("../config/orm.js");

var burger = {
  //Select all burgers from database.
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  //How to Preforms create function to add a burger to database
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  //How to Preform update function to update database
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

  //How to Preform function to delete burger from database
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database
module.exports = burger;
