const Koa = require('koa');
const server = require('@loaders');
const serverConfig = require('@config/server');
const socketIO = require('socket.io');
const http = require('http');
const { connectOn } = require('socket');
const { clientHost, clientPort } = require('@config/server');

const startServer = async () => {
  const app = new Koa();
  const port = serverConfig.serverPort || 3000;
  const httpServer = http.createServer(app.callback());
  const io = socketIO(httpServer, { cors: { origin: `${clientHost}:${clientPort}`, credentials: true } });

  connectOn(io);
  await server(app);
  httpServer.listen(port, () => {
    console.log(`Koa server is listening to port ${port}`);
  });
};

startServer();
