var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "anemluke13",
  port: 3306,
  database: "burger_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con