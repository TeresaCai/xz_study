let result = [
    {lid: 1, title: '华为', price: 88},
    {lid: 2, title: '小米', price: 98}
]
console.log(typeof (result))
console.log(result)


let str = JSON.stringify(result)
console.log(str)
console.log(typeof (str))


let strjs=JSON.parse(str)
console.log(strjs)
console.log(typeof (strjs))