const mysql = require('mysql');
const config = require('./config');

module.exports = function getSQLQueryResult(sql, callback) {
  const connection = mysql.createConnection({
    host: "localhost",
    user: config.user,
    password: config.password,
    database: config.database
  });

  connection.connect();

  connection.query(sql, function (err, result) {
    if (err) throw err;
    callback(result);
  });

  connection.end();
};
