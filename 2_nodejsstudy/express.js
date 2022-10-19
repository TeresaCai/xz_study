//引入express模块  127.0.0.1:8080
const express=require('express')
// console.log(express)

// const http=require('http')
//
//创建服务器
const app=express()
app.listen(8080,()=>{
    console.log('成功')
})
 app.get('/index',(req,res)=>{
     //请求的对象
     //响应的对象
     //设置响应的内容并发送
     res.send('<h1>这是首页</h1>')
 })
app.get('/list',(req,res)=>{
    res.send('这是商品列表')
})

app.get('/study',(req,res)=>{
    res.redirect('https://www.nodeapp.cn/http.html')
})

app.get('/',(req,res)=>{
    res.redirect('/index')
})
app.get('/code',(req,res)=>{
    // res.sendFile('E:\\git\\ctt\\WEB\\2112\\study\\nodejsstudy\\1.html')
    res.sendFile(__dirname+'/1.html')
})

