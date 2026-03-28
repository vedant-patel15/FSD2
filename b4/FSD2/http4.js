var http= require('http')
var fs = require("fs")

http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{'content-Type':'text/html'})
        res.write(`<h1 style="font-size:32px; text-align:center; color:blue; "> Welcome to Login Page</h1>
                <h4> some xyz content here!! </h4> 
                <input type="text" placeholder="Username"> <br><br>
                <input type="password" placeholder="Password"> <br><br>
                <button type='submit'>Submit</button>
                `)
        res.end(`<h5>Ended!!</h5>`)
    }
    else{
        res.writeHead(404,{'content-Type':'text/html'})
        res.end(`<h2>Page not Found !</h2>`)
    }    
}).listen(7001)