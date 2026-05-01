expr=require('express')
app=expr()
app.use(expr.static('./'))
app.listen(2356,()=>{
    console.log("server on");
    
})