const express=require('express')
const app=express()
app.listen(8080,()=>{
    console.log('成功')
})
app.get('/search',(req,res)=>{
    res.sendFile(__dirname+'/search.html')
})
app.get('/mysearch',(req,res)=>{
    // console.log(req.query)
    res.send('搜素成功，关键字是'+req.query.kw)
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/login.html')
})
app.get('/mylogin',(req,res)=>{

    res.send('登陆成功，欢迎req.query.user ')
})
app.get('/package/:pname',(req,res)=>{
console.log(req.params)    //只能手动拼接
    res.send('z这是包的详情，包名称是 ')
})


app.get('/shopping/:lid',(req,res)=>{
    console.log(req.params)
    res.send('添加购物车成功，商品编号：')
})