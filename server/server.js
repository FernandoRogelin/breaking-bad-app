const Koa = require('koa');
const Router = require('koa-router');
const helmet = require('koa-helmet');
const logger = require('koa-logger');
const bodyParcer = require('koa-bodyparser');
const nextjs = require('next');

const nextRoutes = require('./routes');
const port = process.env.PORT || 8080;
const app = nextjs({ dev: process.env.NODE_ENV !== 'production' });
const nextHandler = nextRoutes.getRequestHandler(app);

app
  .prepare()
  .then(() => {
    const server = new Koa();
    const router = new Router();

    server
      .use(logger())
      .use(bodyParcer())
      .use(helmet());

    router.get('/', ctx => {
      ctx.redirect('/login');
    });

    // Handle NextJS pages
    router.get('*', async ctx => {
      await nextHandler(ctx.req, ctx.res);

      ctx.status = 200;
      ctx.respond = false;
    });

    server.use(router.routes(), router.allowedMethods());

    server.listen(port, err => {
      if (err) console.log(err);
      console.log(`Server running in port http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.log(ex.stack);
    process.exit(1);
  });
