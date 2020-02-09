const Koa = require('koa')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors');
const convert = require('koa-convert')

const regroute = require('./modules/reg_route/')
const app = new Koa();


// 注册requestbody解析中间件   
app.use(bodyParser())     

// 处理跨域
app.use(convert(cors()));     

// app.use(views(__dirname + '/views/pages', {
//     extension: 'pug'
// }))

//注册路由
regroute(app) 

// const host = process.env.HOST || "localhost"
// const port = process.env.PORT || 3000
const host = "localhost"
const port = 1452;

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {

    const nuxt = new Nuxt(config)

    // Build in development
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    }

    app.use((ctx:any) => {
        ctx.status = 200
        return new Promise((resolve, reject) => {
            ctx.res.on('close', resolve)
            ctx.res.on('finish', resolve)
            nuxt.render(ctx.req, ctx.res, (promise:any) => {
                promise.then(resolve).catch(reject)
            })
        })
    })

    app.listen(port, function () {
        console.info(`(ENV：${process.env.NODE_ENV})已启动，监听端口 ${port}`);
    });

}

start()