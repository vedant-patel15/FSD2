var express = require('express')
var app=express()
app.get('/',(req,res)=>{
    let obj = {name:"abc",age:20}
    // res.write(JSON.stringify(obj))
    // res.send(obj)
    res.json(obj)
   
})

app.listen(5612)