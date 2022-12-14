//引入express模块
const express=require('express');
//引入用户路由器模块
const userRouter=require('./routes/user.js');
//console.log(userRouter);
//创建WEB服务器

const app=express();
//设置端口
app.listen(8080,()=>{
    console.log('服务器启动成功');
});
//将post传递的参数转为对象  中间件
app.use(express.urlencoded({
extended:false
}));

//使用用户路由器，添加前缀/v1/users
app.use('/v1/users',userRouter);
//添加错误处理中间件，拦截路由中传递过来的错误
// app.use( (err,req,res,next)=>{
//     //err 传递过来的错误
//     console.log(err);
//     //响应服务器端错误
//     res.send({code:500,msg:'服务器端错误'});
// } );

app.use((err,req,res,next)=>{
    console.log(err)
    res.send({code:'500',msg:'服务器出现错误'})
})