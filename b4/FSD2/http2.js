var http= require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application/json"})
    var d={'sub':'FSD-2','faculty':'NAS'}
    res.end(JSON.stringify(d))
}).listen(7001,()=>{console.log('Server Started : http://localhost:7001')})