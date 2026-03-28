var http=require('http')
var url=require('url')
var fs=require('fs')
require('dotenv').config()

var data={
    'name' : 'A',
    'course' : 'B',
    'status' : 'enrolled'
}

var d=JSON.stringify(data)

console.log(d)

var fd=fs.readFileSync('task2.html','utf-8')

http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{'content-Type':'text/html'})
        res.write(` <h1>Weolcome !!</h1><br><br>
                <a href="task2.html">login</a><br><br>
                <a href="api">API</a><br><br>
                <a href="img1.jpg">image</a><br><br>`)
        res.end()
    }
    else if(req.url==='/image'){
        const i=fs.readFileSync('img1.jpg')
        res.writeHead(200,{'content-Type':'image/jpg'})
        res.write(i)
        res.end()    
    }
    else if(req.url==='/task2.html'){
        res.writeHead(200,{'content-Type':'text/html'})
        res.write(fd)
        res.end()    
    }
    else if(req.url==='/api'){
        res.writeHead(200,{'content-Type':'text/html'})
        res.write(d)
        res.end()    
    }
    else{
        res.writeHead(404,{'content-Type':'text/html'})
        res.end(`<h2>Page not Found !</h2>`)
    }
}).listen(process.env.PORT)

console.log(process.env.PORT)