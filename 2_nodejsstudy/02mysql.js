const mysql = require('mysql')
//创建连接池  一组默认15个
const pool = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    //连接成功后进入的数据库
    database: 'tedu',
    connectionLimit: 15  //连接的数量


})

//执行命令

// 'select * from emp where ename="tao"'
// 'select * from emp where ename="'+user+'"'

// var user='khgd'
// var s=1
// pool.query('select * from emp where ename=?or sex=?',[user,s], (err, result) => {
//     if (err) {
//         throw err
//     }
//     console.log(result)
//
// })

var obj={
    ename:'涛桑',
    sex:0,
    birthday:'1973-7-15',

  
}
// // pool.query('insert into emp values(null,?,?,?,?,?)',[obj.ename,obj.sex,obj.birthday,obj.salary,obj.depid],(err,result)=>{
// //     if (err) {
// //         throw err
// //     }
// //     console.log(result)
//
// })

pool.query('insert into emp set?',[obj],(err,result)=>{
    if (err) {
        throw err
    }
    console.log(result)

})