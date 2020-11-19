const Router = require('koa-router');

const router = new Router();

// TODO: 라우터 사용법을 보여주기 위한 임시 코드 입니다. 추후 지워야할 코드입니다.
router.get('hello', (ctx, next) => {
  const data = { name: 'PEPSI', price: 3000 };
  ctx.body = data;
  // throw new Error('에러 테스트');
});

module.exports = router;
