//引入
const fs=require('fs')
//写入流
var rs=fs.createReadStream('./sgg-ctt.zip')
//可写入的流
var ws=fs.createWriteStream('./sgg-ctt2.zip')
rs.pipe(ws)


var n=0

rs.on('data',(c)=>{
    // console.log(c)
    n++
})
rs.on('end',()=>{
    console.log(n)
})

