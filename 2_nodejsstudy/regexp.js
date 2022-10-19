// //定义手机的正则表达式
// var p =/^1[3-9]\d{9}$/
// //使用正则表达式验证手机号码
// console.log(p.test('13945678981'))

var str='我草，你家真大！\n' +
    'wocao还行吧\n' +
    '呵呵呵'
//查找并替换
//global -全局
//ignore -忽略大小写
console.log(str.replace(/wocao|我草/ig,'**'))