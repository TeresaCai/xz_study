const  express=require('express')
// const queryString=require('querystring')
const app=express()
app.listen(8080)

//将所有得post传递的参数转为对象
app.use(express.urlencoded({
    extended:false
}))



//托管静态资源  请求静态资源就去public里面找
app.use(express.static('./public'))
app.post('/mylogin',(req,res)=>{
//     req.on('data',(c)=>{
//         console.log(c)
//         var str=c.toString()
//         //需要引模块
//         var obj=queryString.parse(str)
//     })
    console.log(req.body)
    res.send('登录成功')
})