process.noDeprecation=true
var url=require('url')

var addr = "http://localhost:8080/data?t1=22&t2=20&t3=23#about"
var d= url.parse(addr,true)
var fs=require("fs")
a=parseInt(d.query.t1)
b=parseInt(d.query.t2)
c=parseInt(d.query.t3)

avg=(a+b+c)/3
console.log(avg)
fs.writeFileSync("avg.txt",JSON.stringify(avg))
