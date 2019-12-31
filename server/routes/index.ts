

// import Router from 'koa-router'
const Router = require('koa-router')


let routers = new Router();

//注册接口list
routers.get('/list', async (ctx:any, next:any) => {
    var id = ctx.request.id;
    ctx.body = {
        list: ['我是前端渲染的1', 
        '武汉27例肺炎原因不明暂不断定是SARS！这类A股...', 
        '投服中心：推进持股行权 督促上市公司加大现金...', 
        '武汉出现不明原因肺炎专家组抵达 A股疫苗概念...', 
        '武汉出现不明原因肺炎专家组抵达 A股疫苗概念...', 
        '武汉出现不明原因肺炎专家组抵达 A股疫苗概念...', 
        '武汉出现不明原因肺炎专家组抵达 A股疫苗概念...', 
        '武汉出现不明原因肺炎专家组抵达 A股疫苗概念...', 
        '武汉出现不明原因肺炎专家组抵达 A股疫苗概念...', 
        '武汉出现不明原因肺炎专家组抵达 A股疫苗概念...'
        ]
    }
    
})


module.exports = routers