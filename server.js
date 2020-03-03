import Koa from 'koa'
import React from 'react'
import { renderToString } from 'react-dom/server'
import views from 'koa-views'
import path from 'path'

import Demo from './app/main'
const router = require('koa-router')();
const app = new Koa()
// 将/public文件夹设置为静态路径
app.use(require('koa-static')(__dirname + '/public'))
// 将ejs设置为我们的模板引擎
app.use(views(path.resolve(__dirname, './views'), { map: { html: 'ejs' } }))
// router.get('/hello', (ctx, next) => { // 配置一个简单的get通配路由
//   console.log('server--hello')
//   // ctx.type = 'html';
//   ctx.response.body = 'success'
//   // ctx.body = "Hello koa";
//   next();
// });
app.use(router.routes()); //作用：启动路由
app.use(router.allowedMethods());

// response
// app.use(async ctx => {
//   let str = renderToString(<Demo />)
//   // ctx.body = str
//   await ctx.render('index', {
//     root: str
//   })
// })
router.get('/hello', async (ctx, next) => { // 配置一个简单的get通配路由
  console.log('server--hello')
  let str = renderToString(<Demo />)
  // ctx.body = str
  await ctx.render('index', {
    root: str
  })
});
router.get('/helloe', async (ctx, next) => { // 配置一个简单的get通配路由
  console.log('server--hello')
  // let str = renderToString(<Demo />)
  ctx.type = 'text/json'
  ctx.status = 200
  ctx.response.body = {
    data: {
      name: 'test'
    },
    status: {
      code: 0,
      message: 'succes'
    }
  }
  // await ctx.render('index', {
  //   root: str
  // })
});
app.listen(3000)

console.log('系统启动')