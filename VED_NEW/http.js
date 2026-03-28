http=require('http')
http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Hello home page</h1>')
        res.end()
        }
    else if(req.url=='/about'){
        res.writeHead(200,{'Content-Type':'text/html'})
         res.write('<h1>this is about page</h1>')
         res.end()
    }
    else if(req.url=='/contact'){
        res.writeHead(200,{'Content-Type':'text/html'})
         res.write('<body style="background-color:blue ; color:white"><h1>contact page</h1></body>')
         res.end()
    }
    else{
         res.writeHead(404,{'Content-Type':'text/html'})
         res.write("page note found")
         res.end()
    }
}).listen(5678,()=>{

    console.log("Server Connected")
})