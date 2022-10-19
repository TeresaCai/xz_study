const express=require('express')
const user=express.Router()
user.get('/list',(req,res)=>{
    res.send('这是用户列表')
})

module.exports = user