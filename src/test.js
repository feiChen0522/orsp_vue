let str="首页一级分类1手机数码充值"

let reg=/\d{1,2}(.*)/

let res=str.match(reg)
console.log(res[1])
