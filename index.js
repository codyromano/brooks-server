const config = {
  port: 7555
};

const express = require('express');
const bodyParser = require('body-parser');
const store = require('./store');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/article/:articleId', (req, res) => {
  const { articleId } = req.params;

  res.send(articleId);

  /*
  store
    .createUser({
      username: req.body.username,
      password: req.body.password
    })
    .then(() => res.sendStatus(200))
  */
});
app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`)
});
