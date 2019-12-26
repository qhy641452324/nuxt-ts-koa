
// import Koa from 'koa'
// import path from "path";
// import glob from 'glob';

const path = require('path')
const glob = require('glob')


module.exports =  function (app:any) {
    let rlist = glob.sync('*', {
        cwd: path.join(__dirname, '../../routes/')
    })

    rlist.forEach((v:any) => {
        console.log(v)
        let router = require(path.join(__dirname, '../../routes/') + v)
        app.use(router.allowedMethods())
        app.use(router.routes())

    })
}