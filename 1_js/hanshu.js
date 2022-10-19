// function getSum() {
//     for (var i = 1, sum = 0; i <= 100; i++) {
//
//         sum += i;
//         // console.log(sum);
//
//     }
//     console.log(sum);
// }
//
// getSum();

// function add(a,b) {
//     console.log(a+b);
// }
// add(1,2);
// add(3,4);

// function getSum(n) {
//     for (var i = 1, sum = 0; i <= n; i++) {
//
//         sum += i;
//         // console.log(sum);
//
//     }
//     console.log(sum);
// }
//
// getSum(100);
// getSum(1000);

// function getCount(a, b) {
//     for (var i = a, count = 0; i <= b; i++) {
//         if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
//             count++;
//         }
//     }
//     console.log(count);
// }
//
// getCount(2000, 2200);
// getCount(2000, 2100);


// function getStatus(a,b,c) {
// if (a>b){
//     return a;
// }else {
//     return b;
// }
// return a>b?a:b;


// }
//
// var max=getStatus(4,8,10);
// console.log(max);


//
// function getStaus(n) {
//     switch (n){
//         case 1:
//             return '等待付款';
//             break;
//         case 2:
//             return '等待发货';
//             break;
//         case 3:
//             return '运输中';
//             break;
//     }
// }
// console.log(getStaus(3));


// function isRun(i) {
//    if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
//        return true;
//    }else {
//        return false;
//    }
// }
//
// console.log(isRun(2020));





// JS 实现 计算1~任意数字之间的所有整数阶乘的和
// function getS(n) {
//     for (var i =n,cj=1;i>=1;i--) {
//        cj*=i;
//     }
//     return cj;
// }
// console.log(getS(6));
//
// function getSum(n) {
//     for (var i=n,sum=0;i>=1;i--);{
//         sum+=getS(n);
//     }
//     return sum;
// }
//
// var a=getSum(6);
// console.log(a);





// var m=7;
// function bar(m){
    //var m=5;
    //往上查找m，找到的当前作用域的m
    //让m在原来基础之上加3
    // m=m+3;
    // console.log(m);
// }
// bar(5);
//在全局作用域下，访问m，找全局变量m
// console.log(m);//7


// var n=8;
// function boo(n) {
//     console.log(n)
//     n=9
// }
// boo(8);




// function isPrime(n) {
//     //循环2--n-1之间的所有数
//     for (var i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(isPrime(7));


// var s = 0;
//
// function say() {
//     console.log('从前有座山');
//     s++;
//     //边界条件写在递归的前面
//     if (s === 3) {
//         return;
//     }
//     say();
// }
//
// say();

//使用递归计算n的阶乘
// function getS(n) {
//边界条件
//     if (n === 1) {
//         return 1;
//     }
//
//     //递归
//     return n * getS(n - 1);
//
// }
//
// console.log(getS(5));




// var getSum=function (a,b) {
//     for(var i=a,sum=0;i<=b;i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(getSum(1,100));



//匿名函数自调用 防止全局污染
// (function (n) {
//     var i=1;
//     console.log(i,n);
// })(8);
// (function () {
//     var i=2;
//     console.log(i);
// })();
// (function () {
//     var i=3;
//     console.log(i);
// })();


// var i='6c';
// if (isNaN(i)){
//     console.log('非法的数量');
// }


// var i='1+5';
// var a='parseInt(3.14)';
// console.log(eval(i));//6
// console.log(eval(a));

//
// var obj1 = {a: 1}
// var obj2 = obj1
// obj2.a = obj1.a++
// console.log(obj1.a)



