var url= require('url')
var addr = "http://localhost:8080/data?name=abc&age:20#about"
var d= url.parse(addr,true)
console.log(d)
console.log(d.protocol)
console.log(d.search)
console.log(d.query)
process.noDeprecation=true