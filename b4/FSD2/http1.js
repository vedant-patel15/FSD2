var http= require('http')

http.createServer((req,res)=>{

    res.writeHead(200,{'Content-type':'text/html'})
    // res.writeHead(200,{'Content-type':'text/plain'})
    // res.writeHead(200,{'Content-type':'test/html'})

    // res.write("<h1>HTTP module Example</h1>")
    // res.end()
    
    res.end("<h1>HTTP module Example</h1>")
    

}).listen(3007,()=>{console.log('Server Started : http://localhost:3007')})
