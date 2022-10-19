
//引入mysql模块
const mysql=require('mysql')

//创建连接对象
const c=mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'',
    database:'tedu'
})

//测试连接
c.connect()

//执行命令
c.query('select * from emp',(err,result)=>{
    if (err){
        throw err
    }
    console.log(result)
})
c.query('delete from emp where eid=10',(err,result)=>{
    if (err){
        throw err
    }
    console.log(result)
    if(result.affectedRows===0){
        console.log('删除失败')
    }else {
        console.log('删除成功')
    }
})


