const orm = require("../config/orm");

let burger = {

     all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    add: function(name, cb) {
        orm.insertOne("burgers", name, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;