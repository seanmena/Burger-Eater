var con = require("./connection");


const orm = {
    selectAll: function(table, cb) {
        const queryString = "SELECT * FROM ??";
        con.query(queryString, [table], function (err, res) {
            if(err) throw err;
            cb(res);
        });
    },
    

    insertOne: function(table, name, cb) {
        console.log('test');
        const queryString = "INSERT INTO ?? (burger_name) VALUES (?);";
        con.query(queryString, [table, name], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    
    updateOne: function(table, colsToVal, condition, cb) {
        const queryString = "UPDATE ?? SET devoured = ? WHERE id = ?;";
        con.query(queryString, [table, colsToVal, condition], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;