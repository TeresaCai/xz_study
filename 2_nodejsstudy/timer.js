//一次性定时器
//开启
// var timer=setTimeout(function () {
// console.log('boom')
// },3000)
//
// clearTimeout(timer)


//周期性定时器
// var b=setInterval(function () {
//     console.log('hell0')
// },3000)
// clearImmediate(b)


//立即执行计时器      2,3,1   js单线程运行
// console.log('2')
// var c=setImmediate(function () {
//     console.log('1')
// })
// console.log('3')


// 练习：周期性定时器每隔3秒钟打印‘hello’，打印3次后清除定时器。
// var sum = 0
// var timer = setInterval(() => {
//     console.log('hello')
//     sum++
//     if (sum === 3) {
//         clearInterval(timer)
//     }
// }, 3000)

//立即执行计时器    先主程序先执行，process.nextTick 会插队  2341
// console.log('2')
// var c=setImmediate(function () {
//     console.log('1')
// })
// console.log('3')
// //立即执行计时器
// process.nextTick(function () {
//     console.log('4')
// })
