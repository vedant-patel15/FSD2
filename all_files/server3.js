var express = require('express')
var app=express()
app.get('/',(req,res)=>{
    res.type('text/html')
    res.send("<h1>Hello<h1>")
})

app.get('/about',(req,res)=>{
    res.type('text/html')
    res.send("<h1>about<h1>")
})

app.listen(2000)