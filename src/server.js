expr=require('express')
app=expr()
app.use(expr.static('../public',{index:"form.html"}))
app.listen(2356,()=>{
    console.log("server on");
    
})