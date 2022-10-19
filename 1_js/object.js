var phone = {
//     color:'黑色',
//     brand:'华为',
//     size:'6.9',
//     'made in ':'深圳'
// }
//
// console.log(phone);


///js怎么引进mysql
// var person={
//     eid:1,
//     ename:'张三',
//     sex:'男',
//     salary:8000,
//     'dempt-name':'研发部'
// }
// console.log(person);
// console.log(person.ename);
// console.log(person["dempt-name"]);


// var book={
//     bid:1,
//     title:'希望',
//     editor:'张三',
//     price:123,
//
// }
// book.price=399;
// book['public']='人民出版社';
// console.log(book);


//内置构造函数
// var laptop=new Object();

//需要单独添加属性
// laptop.id=1;
// laptop.name='华为';
// console.log(laptop);


// var studyclass={
//     cid:'2011',
//     center:'徐汇中心',
//     number:20
// }
// // console.log(studyclass);
//
//
//
// //遍历属性
// for (var k in studyclass){
//     console.log(k);
//     console.log(studyclass[k]);
// }


// var study = {
//     math: 98,
//     chinese: 90,
//     eglish:90
// }
// var sum=0;
// var time=0;
// for (var k in study){
//     // console.log(k,study[k])
//     sum+=study[k];
//     time++;
//
// }
// console.log(sum,time,sum/time);


//     function water(waterName)
// {
//     console.log(waterName)
// }
//
// function drinkBSS(w) {
//     w('百岁山')
// }
//
// drinkBSS(water)


// function say(value) {
//     alert(value);
//     return '1'
// }
// alert(say);
// var a = say('hi js.')
// alert(a);

// 使用递归方式计算1-100的和
// var total = 0
// var num = 0
// function add() {
//     if (num > 100) {
//         alert(total)
//     } else {
//         total+=num
//         num++
//         add()
//     }
// }
// add()


//
// var tree = {
//     name: '1',
//     children:[
//         {
//             name: '2-1',
//             children:[
//                 {
//                     name: '2-1-1',
//                     children:[
//                         {
//                             name: '2-1-1-1',
//                             children:[]
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             name: '2-2',
//             children:[
//                 {
//                     name: '2-2-1',
//                     children:[]
//                 }
//             ]
//         }
//     ]
// }
//
// // 输出tree里面的所有节点名字
// function nodeName(node) {
//     console.log(node.name)
//     if (node.children) {
//         for (let i = 0; i < node.children.length; i++) {
//             nodeName(node.children[i])
//         }
//     }
// }
//
// nodeName(tree)


// var obj = {
//     'a': 'A',
//     'b': 'B',
//     'ctt': '蔡田田',
//     'c': 'C'
// }
//
// for (var key in obj) {
//     // console.log(key)
//     console.log(obj[key])
// }
// console.log(obj['a'])


// var product = {
//     pid: 122,
//     title: '手机',
//     price: 199   //如果这带有元呢
}
// if (product.madein === undefined) {
//     product.madein='中国'
// }
// console.log(product.madein)
// if('price' in product) {
//     product.price *= 0.8;
// }
// console.log(product);

// if (!product.hasOwnProperty('madein')) {
//
//     product.price*=0.8;
// }


// var person={
//     name:'张三',
//     paly:function () {
//         console.log(this.name+'的id123')
//     }
// }
// person.sex=function () {
//     console.log('0000')
// }
//
// // console.log(person);
// person.sex();
// person.paly();


// var circle = {
//     r: 5,
//     pi: 3.14,
//     length: function () {
// return 2*this.pi*this.pi
//     },
//     area: function () {
// return this.pi*this.r*this.r
//     }
// }
// console.log(circle);
// console.log(circle.length());
// console.log(circle.area());
//
// circle.length();
// circle.area();


//datasave
// var a=1;
// var b=a;
// a=2;
// console.log(b)

// 引用类型
// var tao={
//     color:'绿色',
//     size:'xl'
// }
// var xin=tao;
// tao.size='s';
// xin.color='大红色'
// console.log(xin.size,xin.color,tao.color);
//
// //销毁地址
// tao=null;
// xin=null;



/////////不懂
// var a = 3;
//
// function fn(n) {
//    return  n = n + 3;
// }
//
// fn(a);
// console.log(a)
//
// console.log(fn(a));
// //
// //
//
//
// var obj = {num: 5};
//
// function fun(p) {
//     p.num = 10;
// }
//
// fun(obj);
// console.log(obj.num)
//




// const obj = {a: 3}
//
// function fn(obj) {
//     obj.a = obj.a + 3
// }
//
// fn(obj)
// console.log(obj.a)




























