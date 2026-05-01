var expr = require('express');
var app = expr()
app.get('/data',(req,res)=>
{
    name=req.query.uname
    age=req.query.age
    res.send("Name is "+name+" & age is "+age)
})
app.listen(5678,()=>{console.log('Server connected.')})