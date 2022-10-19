//循环打印1-10之间所有整数
//声明变量记录初始值
// var i=1;
// while(i<=10){
//     console.log('123');
//     i++;
// }

// var i=30;
// while (i>=20){
//     console.log('123');
//     i--;
// }

//
// var i= 80;
// while (i>=60){
//     console.log('11',i)
//     i-=5
// }


// 这两个在html中加载不出
// var i = 1;
// while (i <= 100) {
//     if (i % 2 === 0) {
//         console.log('偶数', i)
//
//     }
//     i++;
// }


// var i = 1;
// var sum = 0;
// while (i <= 100) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
//     i++;
// }
// console.log(sum);

// var i = 1;
// var sum = 0;
// while (true) {
//     sum += i;
//     if (sum >= 3000) {
//         break;
//     }
//     i++;
// }
// console.log(i, sum);

// var i=1;
// do {
//     console.log(i);
//     i++;
// }while (i<=10);
//
// var i=30;
// do {
//     console.log(i);
//     i--;
// }while (i>=30);


// var i = 1;
// do {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
//     i++;
// }
// while (i <= 100) ;


// var i=1;
// var sum=0;
// do {
//     if (i%3===0){
//         sum+=i;
//     }
//     i++;
// }while (i<=100);
// console.log(sum);

// var i=0.0001;
// var num=0;
// do {
// num+=1;
//
//     i*=2;
//     console.log(i)
// }while (i<8848);
//
// console.log(num);

// for (var i=1;i<=100;i++ ){
//     console.log(i);
// }


//这个打印不出
// for (var i=80;i<=60;i-=5){
//     console.log(i);
// }


// for (var i=1,sum=0;i<=100;i++){
//     if (i%5===0){
//        sum+=i ;
//     }
// }
// console.log(sum,i);


// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 || i % 4 === 0) {
//         continue;
//     }
//     console.log(i);
// }


// for (var j = 1; j <= 6; j++) {
//     for (var i = 1, str = ''; i <= 5; i++) {
//         // console.log('*');
//         str += '*';
//
//     }
//     console.log(str);
// }

// for (var j = 1; j <= 6; j++) {
//     for (var i = 1, str = ''; i <= j; i++) {
//         // console.log('*');
//         str+= '*';
//
//     }
//     console.log(str);
// }


// for (var j = 6; j >= 1; j--) {
//     for (var i = 1, str = ''; i <= j; i++) {
//         // console.log('*');
//         str += '*';
//     }
//     console.log(str);
// }

// for (var j = 1; j <= 9; j++) {
//     for (var i = 1, str = ''; i <= j; i++) {
//         // console.log('*');
//         str +=j+'X'+i+'='+(i*j)+'\t';
//     }
//     console.log(str);
// }

// for (var i = 2000, count = 0; i <= 2100; i++) {
//     if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
//         console.log(i);
//         count++;
//         if (count === 10) {
//             break;
//         }
//     }
// }
// console.log(count);


