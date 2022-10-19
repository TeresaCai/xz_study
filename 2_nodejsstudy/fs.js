//引入文件系统模块
const fs=require('fs')


//同步  带sync都是同步
// var s1=fs.statSync('./timer.js')
// var s=fs.statSync('../js')
// console.log(s)
// console.log(s.isDirectory())   //文件目录
// console.log(s1.isFile())        //文件





//     fs.stat('./main.js',function (err,r) {
// // console.log(err)
//         if(err){
//             throw err                //失败
//         }
// console.log(r)             //成功
//
// })





//创建目录   异步
// fs.mkdir('./mydir1',(err)=>{
//     if (err){
//         throw err
//     }
//     console.log('目录创建成功')
// })
// fs.rmdir('./mydir1',function (err) {
//
// })

//同步
//创建不需要变量
// fs.mkdirSync('./mydir2')

// fs.rmdirSync('./mydir2')
// console.log('2')


//同步读取目录
// console.log(fs.readdirSync('../js'))
//异步读取目录
// fs.readdir('../js',(err,r)=>{
//     if (err){
//         throw err
//     }
//     console.log(r)
// })

//写入文件     为什么删不掉  只能移除空文件？
// fs.writeFile('./2.text','tedu',(err)=>{
//     if(err){
//         throw err
//     }
//
// })
// fs.unlinkSync('./1.tex')





//清空写入文件

// fs.writeFile('./2.text','tedu',(err)=>{
//     if(err){
//         throw err
//     }
//
// })


// fs.writeFileSync('./2.text','123')
var arr=['zz','ss','dd']
for (var i=0;i<arr.length;i++){
    arr[i]
    fs.appendFile('./stu.txt',arr[i],(err)=>{
        if (err){
            throw err
        }

    })
}
console.log('主线程')


// var data=fs.readFileSync('./stu.txt')
// console.log(data.toString())

// fs.readFile('./stu.txt', (err,r)=> {
// if (err){
//     throw err
// }
// console.log(r.toString())
// })






