fs=require('fs')
http=require('http')
http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Hiiii</h1><img src = "a.jpg" />')
        res.end()
        }
    else if(req.url=='/a.jpg'){
        data=fs.readFileSync("a.jpg")
        res.writeHead(200,{'Content-Type':'image/jpg'})
        res.end(data)
    }
    
   
}).listen(1234,()=>{

    console.log("Server Connected")
})