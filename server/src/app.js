const Koa = require('koa');

const app = new Koa();

app.use((ctx) => {
  ctx.body = 'hello world';
});

app.listen(3000, () => {
  console.log('Koa server is listening to port 3000');
});
