const fs = require('fs')
const http = require('http')
const h = http.createServer()
h.listen(8080)
h.on("request", (req, res) => {
    if (req.url === '/index') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.write('<h1>首页</h1>')

    }else if (req.url === '/study'){
        res.statusCode=302
        res.setHeader('Location','https://www.nodeapp.cn/http.html')
    }else{
        res.statusCode=404
        res.write('Not Found')
    }
    res.end()
})