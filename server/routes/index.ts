

// import Router from 'koa-router'
const Router = require('koa-router')


let routers = new Router();

//注册接口list
routers.get('/list', async (ctx:any, next:any) => {
    var id = ctx.request.id;
    ctx.body = {
        list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    }
    
})


module.exports = routers