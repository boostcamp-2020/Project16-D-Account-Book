const Koa = require('koa');
const server = require('./loaders');
const serverConfig = require('./config/server');

const startServer = async () => {
  const app = new Koa();
  const port = serverConfig.port || 3000;

  await server(app);
  app.listen(port, () => {
    console.log(`Koa server is listening to port ${port}`);
  });
};

startServer();
