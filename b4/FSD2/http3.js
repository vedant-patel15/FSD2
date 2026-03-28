var http= require('http')
var fs = require("fs")

http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{'content-Type':'text/html'})
        res.write(`<h1>Welcome to LJ University</h1>
                <img src='img1.jpg' width='300' height='300' />`)
        res.end(`<a href='/img1.jpg'>Image</a>`)
    }
    else if(req.url==='/img1.jpg'){
        const i=fs.readFileSync('img1.jpg')
        res.writeHead(200,{'content-Type':'image/jpg'})
        res.end(i)    
    }
    else{
        res.writeHead(404,{'content-Type':'text/html'})
        res.end(`<h2>Page not Found !</h2>
                <a href='localhost:5007'> Click Here </a> `)
    }
}).listen(5007)