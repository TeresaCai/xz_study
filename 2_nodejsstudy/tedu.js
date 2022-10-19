const express = require('express')
const a = express()
a.listen(8080)
const mysql = require('mysql')
const pool = mysql.createPool({
    host: '127.0.0.1',
    post: '3306',
    user: 'root',
    password: '',
    database: 'tedu'

})


a.use(express.urlencoded({
    extended: false
}))


// a.get('/v1/emps', (req, res) => {
//     var i = req.body.eid
//     pool.query('select * from emp where eid=?', i, (err, result) => {
//         console.log(result)
//         if (err || result.length === 0) {
//             res.send({code: 500, msg: '查询失败'});
//         } else {
//             res.send({code: 200, msg: '查询成功', data: result});
//         }
//     })
// })


a.get('/v1/emps/:eid', (req, res) => {
    // var i = req.body.eid
    pool.query('select * from emp where eid=?', [req.params.eid], (err, result) => {
        console.log(result)
        if (err || result.length === 0) {
            res.send({code: 500, msg: '查询失败'});
        } else {
            res.send({code: 200, msg: '查询成功', data: result});
        }
    })
})




// 接口地址 http://127.0.0.1:8080/v1/emps
a.post('/v1/emps', (req, res) => {
    //获取post传递的参数
    console.log(req.body);
    //执行SQL命令，将数据插入到数据表emp
    pool.query('insert into emp set?', [req.body], (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        //result出现才表示成功
        //send里边的js对象会自动转为json格式
        res.send({code: 200, msg: '员工添加成功'});
    });
});
// a.delete('/v1/emps', (req, res) => {
//     var i = req.body.eid
//     pool.query('delete from emp where eid = ?', i, (err, result) => {
//         console.log(result)
//         if (err) {
//             res.send({code: 500, msg: '删除失败'});
//         } else {
//             res.send({code: 200, msg: '删除成功'});
//         }
//     })
// })


a.delete('/v1/emps/:eid',(req,res)=>{
    console.log(req.params)
    pool.query('delete from emp where eid=?',[req.params.eid],(err,result)=>{
        console.log(result)
        if (result.affectedRows===0) {
            res.send({code: 500, msg: '删除失败'});
        } else {
            res.send({code: 200, msg: '删除成功'});
        }
    })
})