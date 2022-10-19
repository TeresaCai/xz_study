//引入http模块
// const http=require('http')
//
//创建web服务器
// const app=http.createServer()

//监听端口
// app.listen(8080,()=>{
//     console.log('成功')
// })
// //域名/IP地址
// //http://127.0.0.1；8080
// //http://localhost:8080
//
// app.on('request',(req,res)=>{
//     // console.log('有一个请求')
//     res.setHeader('Content-Type','text/html;charset=utf-8')
//     res.write('我有一个猪大宝')
//     res.end()
// })


// const http = require('http')
// const fs = require('fs')
// var study = http.createServer()
// study.listen(8080, () => {
//     console.log('服务器启动成功')
// })

// study.on('request', (req, res) => {
    //请求的 URL和 method
    // console.log(req.url,req.method)



    // res.setHeader('Content-Type','text/html;charset=utf-8')
    // res.write('<h1>欢迎来到学子商城~</h1>')
    // res.end()


    // res.statusCode=302
    // res.setHeader('Location','https://www.nodeapp.cn/http.html')
    // res.end()


    // res.statusCode=404
    // res.setHeader('Content-Type','text/html;charset=utf-8')
    // res.write('Not Found')
    // res.end()
    // var h = fs.readFileSync('./1.html')
    //把读取的内容作为响应的内容
    // res.write(h)
    // res.statusCode=404
    // res.setHeader('Location','html')
    // res.setHeader('Content-Type','text/html;charset=utf-8')
    // res.end()


// })

const fs=require('fs')
fs.writeFileSync('./2.http.js')





