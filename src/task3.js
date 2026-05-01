expr=require('express')
app=expr()
app.use(expr.static('../public',{index:"form.html"}))
app.use(expr.urlencoded({ extended: true }));

app.get('/data',(req,res)=>{
    if (req.query.newsletter=="on"){
        res.write() 
    }



})

app.listen(2356,()=>{
    console.log("server on");
    
})