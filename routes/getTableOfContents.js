const getSQLQueryResult = require('../database/getSQLQueryResult');

module.exports = function getTableOfContents(app) {
  app.get('/table-of-contents/', (req, res) => {
    const sql = `SELECT id,title FROM articles ORDER BY title`;

    getSQLQueryResult(sql, result => {
      res.send({
        contents: result
      });
    });
  });
};