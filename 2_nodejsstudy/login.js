const express=require('express')
const app=express()
app.listen(8080,()=>{
    console.log('成功')
})
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/login.html')
})
app.post('/mylogin',(req,res)=>{
req.on('data',(c)=>{
    console.log(c)
    var str=c.toString()
    var obj=queryString.parse(str)

})
    res.send('登陆成功')
})