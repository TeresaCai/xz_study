function area(r) {

    return Math.PI*Math.pow(r,2)
}
function zc(r) {

    return 2*Math.PI*r
}

var person={
    ename:'张三',
    sex:1
}


//暴露多项
// module.exports={
//     A:area,
//     B:zc,
//     per:person
// }

// 暴露单项   直接把他作为作为暴露对象
// module.exports= person
module.exports= zc
