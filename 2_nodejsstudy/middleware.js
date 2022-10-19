const express = require('express')
const middle = express()
middle.listen(8080)


function fn(req, res, next) {
    // console.log('拦截了/list请求')
    //获取get传递的参数
    // console.log(req.query)

    //验证用户的身份
    if (req.query.user !== 'root') {
        res.send('请提供管理员账号')
    } else {
        next()
    }
}

function fn2(req,res,next) {
   req.query.price*=0.8
    next()
}




//添加中间件，拦截/list的请求
middle.use('/list', fn)
middle.use('/delete', fn)
middle.use('/shopping', fn2)


//路由
middle.get('/list', (req, res) => {
    res.send('这是用户列表，只有管理权限查看')
})





middle.get('/delete', (req, res) => {
    res.send('用户删除成功')
})

middle.get('/shopping',(req,res)=>{
    res.send('商品的价格是'+req.query.price)
})


//没有路由响应就返回这个歌 404做法
middle.use((req,res)=>{
    res.send('404')
})