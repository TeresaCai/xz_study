// const express = require('express')
// const pool = require('../pool')
// const router = express.Router()
// module.exports = router
//
//
// //路由：向客户端输出商品列表
// router.get('/list', (req, res) => {
//     let ps = req.query.pageSize
//     ps = ps ? parseInt(ps) : 10
//     console.log(ps)
//     pool.query('select lid,title,price from xz_laptop limit ?', [ps], (err, result) => {
//         if (err) {
//             throw err
//         }
//         res.send(result)
//     })
// })

/**** 路由器模块  封装着与  product(商品)相关的路由 ****/
//引入必须的模块
const express = require('express')
const pool = require('../pool')
const router = express.Router()
module.exports = router

/* 路由:向客户端输出商品列表
			请求方法 ： GET
			请求地址    /v2/product/list
			请求查询字符串数据，pageSize - （可选）
			http://127.0.0.1:8080/v2/product/list?pageSize=10
			为了提升用户体验从实际业务出发,将默认显示10条数据
			如果用户指定了查询条数，那么显示用户需要的
			如果用户没有指定查询条数，显示10条
*/
router.get('/list', (req, res) => {
    let ps = req.query.pageSize  //客户端提交的查询字符串数据都是String
    ps = ps ? parseInt(ps) : 10     //如果客户端提交ps则用原值，否则设置为10
    let sql = 'SELECT lid,title,price FROM xz_laptop LIMIT ?'
    pool.query(sql, [ps], (err, result) => {
        if (err) {
            throw err
        }
        res.send(result)  //自带序列化
    })
})

router.get('/del', (req, res) => {
    let lid = req.query.lid
    pool.query('delete from xz_laptop where lid=' + lid, [lid], (err, result) => {
        if (err) {
            throw err
        }
        if ((result.affectedRows > 0)) {
            res.send('删除成功')
        } else {
            res.send('删除失败')
        }
    })
})


router.post('/add', (req, res) => {
    let t = req.body.title
    let p = req.body.price
    pool.query('insert into xz_laptop (title,price) values (?,?)', [t, p], (err, result) => {
        if (err) {
            throw err
        } else {
            res.send(result)
        }
    })
})

