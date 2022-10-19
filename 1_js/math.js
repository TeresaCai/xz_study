// console.log(Math.PI)
// console.log(Math.floor(1.5))//向下取整
// console.log(Math.ceil(1.5))//向上取整
// console.log(Math.round(1.15))//四舍五入
// console.log(Math.pow(2,3))//x的几次方
// console.log(Math.random())//0-1随机数

// 双色球
// 红球：随机获取1~33之间的6个数字，不能重复，从小到大排列
// 蓝球：随机获取1~16之间的1个数字，可以和之前的红球重复
// 将这组数字放入到一个数组

var red=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]
var blue=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
var dob=[]
for (var i=0;i<6;i++){
    var n=Math.floor(Math.random()*red.length)
        dob.push(red[n])
    red.splice(n,1)
    // console.log(n,red[n])
}
dob.sort(function (a,b){
    return a-b
})
// 1~16之间
var blue2=Math.floor(Math.random()*16)+1
dob.push(blue2)
console.log(dob)

















// var arr=['广东','深圳','珠海','南京','苏州','无锡','郑州','洛阳','周口',]
// var n=Math.floor(Math.random()*arr.length)
// console.log(n)
// console.log(arr[n])



// 随机获取a~z之间的4个字母
// var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// var  arr2=[]
// for (var i=0;i<4;i++){
//     var n=Math.floor(Math.random()*arr.length)
//     // console.log(n)
// arr2.push(arr[n])
//     arr.splice(n,1)
//
//
// }
// console.log(arr2)