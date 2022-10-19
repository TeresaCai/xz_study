const express = require('express')
const app = express()
app.listen(8080, () => {
    console.log('成功了')
})
app.get('/reg', (req, res) => {
    res.sendFile(__dirname + '/reg.html')
})

app.get('/myreg', (req, res) => {
    // console.log(req.query)
    res.send('注册成功  用户名：' + req.query.user + '邮箱：' + req.query.email + '手机：' + req.query.phone)
//     res.send(`
// 注册成功
// 用户名：${req.query.user}<br>
// 邮箱：${req.query.email}<br>
//
// `)
})