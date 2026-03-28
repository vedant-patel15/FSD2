var url= require('url')
var addr = "http://localhost:7410/login.html"
http= require('http')
fs=require('fs')
var q= url.parse(addr,true)

qdata=q.pathname

http.createServer((req,res)=>{
    if(req.url==qdata){
        data=fs.readFileSync("."+qdata)
        res.end(data)
        }
    
    
   
}).listen(7410,()=>{

    console.log("Server Connected")
})