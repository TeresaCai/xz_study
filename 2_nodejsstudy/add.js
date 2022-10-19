const express=require('express')
const app=express()
app.listen(8080)



app.use(express.urlencoded({
    extended:false
}))

app.use(express.static('./public'))

app.post('/myadd',(req,res)=>{
    res.send('姓名是'+req.body.ename)
})