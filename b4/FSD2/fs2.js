 var fs = require("fs")
 
// fs.mkdirSync("abc")
fs.writeFileSync("abc\\my.txt","This is first File !!")
fs.appendFileSync("abc\\my.txt","\n appended data abcd")

var r=fs.readFileSync("abc\\my.txt","utf-8")
fs.writeFileSync("abc\\new.txt",r)

fs.unlinkSync('abc\\my.txt')