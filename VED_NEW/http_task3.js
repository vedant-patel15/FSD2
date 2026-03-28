//server side loading......
// const http =require('http')
// http.createServer((req,res)=>{
//     setTimeout(()=>{
        
//             res.writeHead(200,{"Content-Type":"text/html"})
//             res.write("<h1>Welcome to Priyen sir's class</h1>")
//             res.end("Hi")
//         },10000)   
// }).listen(1234,()=>{

//     console.log("Server Connected")
// })

//cliet side loading........

const http =require('http')
http.createServer((req,res)=>{
   res.write(`<body> <p id="d1" ></p> 
    <script>
    setTimeout(()=>{
            document.getElementById("d1").innerHTML=" i am ved"
        },5000)</script>`)
        res.end()
}).listen(6547,()=>{

    console.log("Server Connected")
})
