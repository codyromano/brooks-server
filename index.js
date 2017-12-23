const createServer = require('./createExpressServerWithConfiguration');
const setupArticleByIdRoute = require('./routes/getArticleById');
const setupTableOfContentsRoute = require('./routes/getTableOfContents');
const config = require('./database/config');

const app = createServer();
setupTableOfContentsRoute(app);
setupArticleByIdRoute(app);

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`)
});
