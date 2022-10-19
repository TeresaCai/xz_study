// var d1=new Date('2020/10/18 11:55:30')
//
// var d2=new Date(2020,10,18,11,55,30)   //月份要减1  是真实的时间
//
// var d3=new Date()//当前系统时间
//
// var d4=new Date(15000) //时间戳 计算机元年1970-1-1 0-0-0     //数据库里的time  用bigint
//
//
// console.log(d1)
// console.log(d2)
// console.log(d3)


// var d=new Date('2020/1/19 11:55:30')
// console.log(d.getFullYear())
// console.log(d.getMonth()+1)
// console.log(d.getDate())
// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getMilliseconds())    //milli
//
// //获取星期  0-6 日-六
// console.log(d.getDay())
//
// //获取时间戳
// console.log(d.getTime())


// var d=new Date()
// var year=d.getFullYear()
// var month=d.getMonth()+1
// var date=d.getDate()
// var day=d.getDay()
//
// if (month<10){
//     month='0'+month
// }
// var arr=['日','一','二','三','四','五','六',]
// console.log('今天是'+year+'年'+month+'月'+date+'日'+'星期'+arr[day])


//练习；计算出举例2023年1月21日0时0分0秒春节还有X天X小时X分X秒

// var d1=new Date()
// var d2=new Date('2023/1/21')
// var d3=d2.getTime()-d1.getTime()
// // console.log(d3)
// var d=parseInt(d3/1000)
// var seconds=parseInt(d%60)
// var mintue=parseInt(d%3600/60)
// var hours=parseInt(d%(3600*24)/3600)
// var day=parseInt(d/(24*3600))
//
//
// console.log(day,hours,mintue,seconds)


//转为本地字符串

// var d=new Date()
// console.log(d.toLocaleString())


//设置当前的年份加3
// var d=new Date('2023/1/21')
//
// d.setFullYear('2022')
// d.setMonth('2')   //三月
// //设置当前的年份加3
// d.setFullYear(d.getFullYear()+3)
// //2个月以前
// d.setMonth(d.getMonth()-2)                      //这个一点晕
// console.log(d)


//练习：创建Date对象，保存一个员工的入职时间2022/2/10，假设合同期为3年，计算出到期时间；最后打印出两组日期时间的本地字符串形式
//    入职时间：xx..
//    到期时间：xx..
// var d1=new Date('2022/2/10')
// //拷贝date对象
// var d2=new Date(d1)
// //合同到期时间
// d2.setFullYear(d2.getFullYear()+3)
// console.log(d1.toLocaleString())//入职时间
// console.log(d2.toLocaleString())
// // console.log(d1)


//number对象
// var n1=2
// var n2=new Number(2)
// console.log(n1,n2,typeof n2)


// var n=2*3.14*5
// // n.toFixed(2)
// console.log(n.toFixed(2)          //计算商品总价  省略小数点 增加小数点位数
// )

// var total=5999+2000
// console.log(total.toFixed(2))


//boolean对象
// var b1=true
// var b2=new Boolean(true)
// console.log(Boolean(1))


//
// var d=new Date('2021/1/1')
// var d1=new Date('2021/12/25')


// 练习：创建函数getDays，传递一个日期，返回这个日期是一年的第几天
// getDays(2021,12,25)
//
// function getDays(year,month,date) {
//
//     //两个时间戳相减 后转成天数  这种不用考虑闰年 计算的毫秒数
//    var d1=new Date(year,month-1,date+1)
//     var d2=new Date(year,0,1)
//     var d=d1-d2
//     console.log(d)
//     return d/(24*3600*1000)
//
// }
// console.log(getDays(2022,12,25))


// function getDays(year,month,day){
//     // 如果是闰年为29天，否则平年为28天
//     var second = year%4==0 && year%100!=0 || year%400 ==0 ? 29 : 28;
//     //声明变量，用于记录总天数，先把当前月天数加入进去
//     var sum = day;
//     //每个月的天数不同
//     var monthDays = [31,second,31,30,31,30,31,31,30,31,30,31];
//     //遍历当前月份
//     for(var i = 0; i<month-1; i++){
//         //加入每个月份的天数
//         sum+=monthDays[i];
//     }
//     //返回总的天数
//     return sum;
// }
// console.log( getDays(2022,12,25) );


//尝试执行
// var score = 128
// try {
//     if (score > 100) {
//         throw '非法代码'
//     }
// } catch (err) {
//     console.log(err)
// }


// let sum=0              //写在外层就不会有块级的约束
// for (let i=0;i<=100;i++){
//     sum+=i
// }


// ()=> {
//
// }

//
// var arr=[13,16,1,2,56]
// arr.sort( (a,b)=> {                        //箭头函数中只有一行代码  return 可以省略
//     return a-b                                                         //sort（a,b）=>a-b
// })
// console.log(arr)


// var getAvg=(a,b,c)=>(a+b+c)/3
//
// console.log(getAvg(12,18,19))


// var ename = 'zz'
// var sex = 1
// var salary = 50000     //字符串用${}   里面可以写三目运算
// console.log(`姓名：${ename}  性别；${sex ? '男':'女'}   薪资：${salary.toFixed(2)} `)

// var product = {
//     title: '商品',
//     price: 123,
//     isOnsale: 1
// }
//
// console.log(`
// 标题:${product.title}
// 价格：${product.price.toFixed(2)}元
// 是否在售：${product.isOnsale ? '是' : '否'}
// `)










