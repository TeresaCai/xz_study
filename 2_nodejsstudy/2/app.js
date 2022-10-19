const express=require('express')

//引入商品路由器
const productRouter=require('./product.js')
const userRouter=require('./user.js')
// console.log(product)



const app=express()




app.listen(8080)

app.use('/product',productRouter)
app.use('/user',userRouter)


