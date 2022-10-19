// var arr=[
//
// ]
//
// console.log(arr)

// var salary=[8000,20000,100000]
// console.log(salary)
//
// var laptop=['华为','小米','苹果']
//
// laptop[1]='联想';
// laptop[5]='外星人';
// console.log(laptop)


// var city=['北京','上海','深圳']
// city[1]='广州';
// city[3]='海南'
// city[city.length]='南京'
// city.length=0
// console.log(city);
// console.log(city.length);

// var car = [];
//     car[car.length] = '宝马',
//     car[car.length] = '奔驰',
//     car[car.length] = '野马',
//     console.log(car)
// console.log(car.length)

// var arr=new Array('腾讯','阿里','头条');
// var course=new Array(3)//初始化长度
// course[0]='1'
// course[1]='2'
// course[2]='3'
// console.log(course)


// var country=new Array('中国','美国','英国')
// var ball=new  Array(5);
// ball[0]='大前锋'
// ball[1]='小前锋'
// ball[2]='中锋'
// ball[3]='得分后卫'
// ball[4]='后卫'
// console.log(country,ball)


//遍历数组
// var arr = ['a', 'b', 'c', 'd']
// for (var k in arr) {
//     console.log(k, arr[k])
//
// }
// // console.log(k,arr[k])
//
// for (var k = 0; k <= arr.length - 1; k++) {
//     console.log(k, arr[k])
// }
//

// var scores = [98, 99, 100, 110]
// var sum= 0;
// var time = 0;
// for (var k in scores) {
//     sum += scores[k]
//     // time++
//     // console.log(sum)
// }
// console.log(sum, sum / scores.length)
//
// for(var i=0,sum=0;i<=scores.length-1;i++){
//     sum+=scores[i]
//
// }
// console.log(sum, sum / scores.length)


// var salary = [8000, 10000, 111000, 7000, 67000,9000]
// var time=0;
// for (var k in salary) {
//     if (salary[k] <= 10000 && salary[k] >= 8000){
//         time++;
//
//     }
//         }
// console.log(time)


// for (var i=0,time=0;i<=salary.length-1;i++){
//     if (salary[i] <= 10000 && salary[i] >= 8000){
//         time++;
//
//     }
//
//
// }
// console.log(time)
// console.log(time/salary.length*100+'%')


// var num = [123, 145, 1999, 2000]
// var max=num[0]//  以数组第一个数字作为参考
// for (var k = 0; k <= num.length - 1; k++) {
//     if (num[k] > max) {
//         max=num[k]
//
//
//     }
//
// }
// console.log(max)


//反转数组
// var arr = ['a', 'b', 'c', 'd']
// var arr2=[]
// // console.log(arr.toString())
// // console.log(arr.reverse())
// for (var i=0;i<arr.length; i++) {
//    arr2[i]=arr[arr.length-1-i]
//
//
// }
// console.log(arr2)

//
// var arr = [23, 9, 78, 6, 45]
// arr.reverse();
// // console.log(arr.toString())
// console.log(arr.reverse())


// var max
// var m
// for (var i = 0; i < arr.length; i++) {
//     for (var j = i; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//             max = arr[j]
//             arr[j] = arr[i]
//             arr[i] = max
//
//         }
//     }
//     console.log(arr[i])
// }


// for (var i = 0; i < arr.length; i++) {
//     for (var j = i; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             m = arr[i]
//             arr[i] = arr[j]
//             arr[j] = m
//         }
//     }
//     console.log(arr[i])
// }

//
// var lie = [6, 90, 23, 45, 78]
// var min
// var max
// for (var i = 0; i <= lie.length-1; i++) {
//     for (var j = i; j <= lie.length-1; j++) {
//         if (lie[i] > lie[j]) {
//             min = lie[i]
//             lie[i] = lie[j]
//             lie[j] = min
//         }
//     }
//
// }
// console.log(lie)
//
// //从大到小//第二种方法
// for (var i=0;i<lie.length-1;i++ ){
//     for (var j=0;j<lie.length-i-1;j++){
//         if (lie[j]<lie[j+1]){
//             max=lie[j]
//             lie[j]=lie[j+1]
//             lie[j+1]=max
//         }
//     }
//
// }
// console.log(lie)

//
// const arr = [80, 16, 50, 6, 100, 1]
//
// function getSum(a, b) {
//     // return a-b
//     return b - a
// }
//
// console.log(arr.sort(getSum))///按照unicode码排序

//数组排序
// function sortNum(a, b) {
//     return a - b
// }
//
// const arr = [80, 16, 50, 6, 100, 1]
// console.log(arr.sort(sortNum))


//多数组的拼接
// var arr1=['腾讯','阿里','头条']
// var arr2=['华为','小米','苹果']
// var arr3=['中国','美国','英国']
// console.log(arr1.concat(arr2,arr3))
// var arr4=['腾讯','阿里','头条','中国','美国','英国']
// console.log(arr4.slice(-4,-1))
// console.log(arr4.slice(2,5))


//
// var e=['a','b','c','d','e','f','g','h']
// var a=e.slice(1,4)
// var b=e.slice(5,6)
//
// console.log(e.slice(1,4),e.slice(5,6))
// console.log(e.slice(1,4),e.slice(-3,-2))
// var c=a.concat(b)
// console.log(c)


//删除数组

// var cat=['腾讯','阿里','头条','中国','美国','英国']
// // cat.splice(2,2)
// // console.log(a)
// console.log(cat.splice(2,2))
// console.log(cat)


//
// var e = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
//
// console.log(e.splice(2, 2))
// // console.log(e)
// console.log(e.splice(-3,1,'m'))
// console.log(e.splice(1,0,'z'))
// console.log(e)



// var a=['腾讯','阿里','头条','中国','美国','英国']
//
// console.log(a.push('联想','华为'))
// console.log(a.pop())
// console.log(a.unshift('百度','小米','vivo'))
// console.log(a.shift())
// console.log(a.indexOf('vivi'))
//
// console.log(a)


// var fu=['富强福','兴业福','敬业福']
// if (fu.indexOf('敬业福')===-1){
//     fu.push('敬业福')
// }
//
// console.log(fu)






//二维数组
//省份                                                      //这些的arr1 arr2有什么关系啊神经病
// var arr1=['广东省','江苏省','河南省']                          //打印输出所有城市 循环嵌套

//城市
// var arr2=['广东','深圳','珠海','南京','苏州','无锡','郑州','洛阳','周口']

// var arr3=[
//     ['广东','深圳','珠海'],
//     ['南京','苏州','无锡'],
//     ['郑州','洛阳','周口']
// ]
//
// console.log(arr3[0][1])





//字符串对象

// var str1='1'   //字面量
// var str2=new String('1')
//
// console.log(str2,typeof str2)

// var str3=String('1'+'2')
// var str4=String('It\' is a dog')
// var str5=String('a\nd')         //换行
// var str5=String('a\td')
// var str5=String('C:\\User\\web')
//
// // console.log(str3,typeof str3)
// console.log(str5)




//API
// var str1='play和我'
// console.log(str1.length)

// var str='javascript'                        //统计每个字符出现的次数，且字符出现最多的是？
// for (var i=0,time=0;i<=str.length-1;i++){
//     if (str[i]==='a'){
//         time++
//     }
//
// }
// console.log(time)

// console.log(str.lastIndexOf('a'))



//
// var str='877035700qq'
// for (var i=0;i<=str.length;i++){
//     if (str.indexOf('@')===-1){
//
//     }
// }
// console.log('非法的邮箱')


// var str='Javascript'
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.slice(2,7))


//练习：声明变量保存用户输入的邮箱，分别截取出邮箱的用户名和域名     tao123456@163.com

//查找@的下标
// var email='tao123456@163.com'
// var a=email.indexOf('@')
// var b=email.slice(0,a)
// var c=email.slice(a+1)    //到结尾不需要写下标
// console.log(b,c)


//split( )   将字符串转为数组
//
// var str='Javascript'
// var b=str.split('').reverse().join('')           //先把字符串转为数组’‘  再把数组翻转 ’‘  再把数组转字符串
// // console.log(b)
// // for (var i=0;i<b.length; i++) {
// //     b[i] = b[b.length - 1 - i]
// // }
// console.log(b)



// var str=' hOw aRE yOU '

//自己的方法没做出来
// var arr=str.toLowerCase().split('')
// console.log(arr)
// var a=arr.indexOf(' ')
//
// console.log(str)
// console.log(a)
//第二种方法
// var arr=str.split(' ')
// for (var i=0;i<=arr.length-1;i++){
//     var f=arr[i].slice(0,1).toUpperCase();
//     var o=arr[i].slice(1).toLowerCase();
//     //console.log(f,o);
//     arr[i]=f+o
// }
// console.log(arr.join(' '))


