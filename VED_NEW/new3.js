const http =require('http')
http.createServer((req,res)=>{
    obj ={'name':'abc',"age":24}
    res.writeHead(200,{"Content-Type":"application/json"})
    res.end(JSON.stringify(obj))
}).listen(5678,()=>{

    console.log("Server Connected")
})