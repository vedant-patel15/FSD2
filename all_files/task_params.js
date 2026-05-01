var expr = require('express');
var app = expr()
app.get('/user/:id',(req,res)=>
{
    const uid=req.params.id
    const name=req.query.name
    const mark=req.query.mark
    res.json({
        "message":"Data Received",
        "params":{"id":uid},
        "query" :{name,mark}
    })
})
app.listen(5678)