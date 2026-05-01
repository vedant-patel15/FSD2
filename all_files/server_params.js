var express = require('express')
var app=express()

app.get('/:id',(req,res)=>{
    res.send('user with id='+req.params)
})
app.listen(5007)
