var p=require('path')

var addr="D:/LJ/node/temp1234.txt"

var dir=p.dirname(addr)
var base=p.basename(addr)
var ext=p.extname(addr)
console.log(`Directory : ${dir}
Base : ${base}
Extention : ${ext}`)

var ps=p.parse(addr)
console.log(ps)
