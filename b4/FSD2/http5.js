
var http=require('http')
var url=require('url')
var fs=require('fs')

// var addr='http://localhost:5001/my.html'
// var u=url.parse(addr)

http.createServer((req,res)=>{
    fs.readFile('.'+req.url.pathname,(e,d)=>{
        if(e){
            res.writeHead(404,{'content-Type':'text/plain'})
            res.end('File End')
        }
        else{
            res.writeHead(200,{'content-Type':'text/html'})
            res.end(d)
        }
    })
}).listen(5001)