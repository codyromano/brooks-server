const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection({
  host: "localhost",
  user: config.user,
  password: config.password,
  database: config.database
});

module.exports = function getSQLQueryResult(sql, callback) {
  connection.query(sql, function (err, result) {
    if (err) throw err;
    callback(result);
  });
};
