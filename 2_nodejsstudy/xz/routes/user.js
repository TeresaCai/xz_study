//引入express模块
const express = require('express');

const pool = require('../pool.js')
//创建路由器对象
const r = express.Router();


// http://127.0.0.1:8080/v1/users/reg
r.post('/reg', (req, res, next) => {
    // console.log('打印成功')
    // console.log(req.body)
    var obj = req.body
    if (obj.uname === '') {
        res.send({code: 401, msg: 'uname不能为空'})
        return;
    }
    if (obj.upwd === '') {
        res.send({code: 402, msg: 'upwd不能为空'})
        return;
    }
    if (obj.email === '') {
        res.send({code: 403, msg: 'email不能为空'})
        return;
    }
    if (obj.phone === '') {
        res.send({code: 404, msg: 'phone不能为空'})
        return;
    }
    if (!/^1[3-9]\d{9}$/.test(obj.phone)) {
        res.send({code: 405, msg: '手机格式错误'})
        return;
    }
    console.log(obj)
    pool.query('insert into xz_user set?', [obj], (err, result) => {
        if (err) {
            //出现sql相关的错误，交给下一个错误处理的中间件
            next(err)
            return;
        }
        console.log(result)
        res.send({code: '200', msg: '注册成功'})
    })


})

r.post('/login', (req, res, next) => {
    var obj = req.body
    if (obj.uname === '') {
        res.send({code: 401, msg: 'uname不能为空'})
        return;
    }
    if (obj.upwd === '') {
        res.send({code: 402, msg: 'upwd不能为空'})
        return;
    }
    console.log(obj)
    pool.query('select * from xz_user where uname=? and upwd=?', [obj.uname, obj.upwd], (err, result) => {
        console.log(err)
        console.log(result)
        if (err) {
            next(err)
            return
        }
        if (result.length === 0) {
            res.send({code: 501, msg: '登录失败'})
        } else {
            res.send({code: 200, msg: '登陆成功'})
        }
    })
})

// 接口地址：http://127.0.0.1:8080/v1/users/delete/
r.delete('/delete/:uid', (req, res, next) => {
    //获取数据
    var obj = req.params
    console.log(obj)
    // res.send('用户查询成功')
    // sql命令
    pool.query('delete from xz_user where uid=?', [obj.uid], (err, result) => {
        if (err) {
            next(err)
            return
            // console.log(err)
        }
        console.log(result)
        if (result.affectedRows === 0) {
            res.send({code: 400, msg: '删除失败'})
        } else {
            res.send({code: 200, msg: '删除成功'})
        }


    })
})


// 接口地址：http://127.0.0.1:8080/v1/users/info/
r.get('/info/:uid', (req, res, next) => {
    //获取数据
    var obj = req.params
    console.log(obj)
    // res.send('用户查询成功')
    // sql命令
    pool.query('select * from xz_user where uid=?', [obj.uid], (err, result) => {
        if (err) {
            next(err)
            return
            // console.log(err)
        }
        console.log(result)
        if (result.length === 0) {
            res.send({code: 400, msg: '查询失败'})
        } else {
            res.send({code: 200, msg: '查询成功', data: result})
        }

    })
})

//修改用户数据
//接口地址接口地址：http://127.0.0.1:8080/v1/users/info
r.put('/info', (req, res, next) => {
    //获取数据
    var obj = req.body
    console.log(obj)

//验证不能为空
    var i = 400
    for (var k in obj) {
        i++;
        // console.log(k,obj[k])
        if (!obj[k]) {
            res.send({code: i, msg: k + '不能为空'})
            return;
        }
    }
// 验证手机
    if(!/^1[3-9]\d{9}$/.test(obj.phone)){
        res.send({code:406,msg:'手机格式错误'});
        return;
    }
    //验证邮箱
    if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(obj.email)){
        res.send({code:407,msg:'邮箱格式错误'});
        return;
    }
    //5.3执行SQL命令
    pool.query('update xz_user set? where uid=?',[obj,obj.uid],(err,result)=>{
        if(err){
            next(err);
            return;
        }
        console.log(result);
        //结果是对象，如果对象向的affectedRows为0表示修改失败，否则修改成功
        if(result.affectedRows===0){
            res.send({code:501,msg:'修改错误'});
        }else{
            res.send({code:200,msg:'修改成功'});
        }
    });
});


//这里看不出哪里错了

    // if (!obj.user_name) {
    //     res.send({code: 401, msg: '用户名不能为空'})
    //     return
    // }


    // if (!obj.email) {
    //     res.send({code: 401, msg: '邮箱不能为空'})
    //     return
    // }
    // if (!obj.phone) {
    //     res.send({code: 401, msg: '手机不能为空'})
    //     return
    // }
    // if (!obj.uid) {
    //     res.send({code: 401, msg: '用户编号不能为空'})
    //     return
    // }
    // if (!obj.gender) {
    //     res.send({code: 401, msg: '性别不能为空'})
    //     return
    // }


module.exports = r
