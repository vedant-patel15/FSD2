var http=require('http')
var url=require('url')
var fs=require('fs')

var addr="https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
process.noDeprecation=true

var up=url.parse(addr,true)
console.log(up)

var data=up.query.c1+'!\n'+up.query.c3+' '+up.query.c2+'\n'+up.hash
fs.writeFileSync('.'+up.pathname,data)

http.createServer((req,res)=>{
    if(req.url==='/'){
        var d=fs.readFileSync('.'+up.pathname,'utf-8')
        res.writeHead(200,{'content-Type':'text/html'})
        res.end(`<h1 style="color: red;"><pre>${d}</pre></h1>`)
    }
    else{
        res.writeHead(404,{'content-Type':'text/plain'})
        res.end(`Page Not Found!`)
    }
}).listen(5002)