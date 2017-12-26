import * as Router from 'koa-router';

const router = new Router();

/* GET api listing. */
router.get('/', async (ctx) => {
  ctx.status = 200;
  ctx.body = {
    msg: "api works!"
  }
});

export const api = router;