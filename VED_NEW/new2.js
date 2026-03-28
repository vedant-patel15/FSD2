const http =require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("how are you?")
    res.write("<h1> Hello server </h1>")
    res.end("Hi")
}).listen(5678,()=>{

    console.log("Server Connected")
})