const getSQLQueryResult = require('../database/getSQLQueryResult');

module.exports = function getArticleById(app) {
  app.get('/article/id/:articleId', (req, res) => {
    const articleId = parseInt(req.params.articleId);

    if (Number.isInteger(articleId) && articleId > 0) {
      const sql = `SELECT * FROM articles WHERE id=${articleId} LIMIT 1`;
      getSQLQueryResult(sql, result => res.send(result[0]));
    } else {
      res.send({
        error: "Invalid article id"
      });
    }
  });
};