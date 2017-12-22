const express = require('express');
const bodyParser = require('body-parser');

const getSQLQueryResult = require('./database/getSQLQueryResult');
const config = require('./database/config');

const app = express();
app.use(bodyParser.json());

app.get('/table-of-contents/', (req, res) => {
  const sql = `SELECT id,title FROM articles`;

  getSQLQueryResult(sql, result => res.send(result));
});

app.get('/article/id/:articleId', (req, res) => {
  const articleId = parseInt(req.params.articleId);
  const sql = `SELECT * FROM articles WHERE id=${articleId} LIMIT 1`;

  getSQLQueryResult(sql, result => res.send(result));
});

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`)
});
