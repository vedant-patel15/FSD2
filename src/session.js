expr=require('express')
app=expr()
sess=require('express-session')
app.use(expr.static('../public',{index:"form1.html"}))
app.use(sess({secret:"this is key",
    resave:true,
    saveUninitialized:true
}))

app.get("/savesession",(req,res)=>{
   req.session.fname=req.query.fname
   req.session.pwd=req.session.pwd
   res.redirect("/fetch")
})

app.get("/fetch",(req,res)=>{
    res.send(`welcome ${req.session.fname} <a href='/destroy'>Logout</a>`)
})

app.get('/destroy',(req,res)=>{
    req.session.destroy()
    res.redirect("/")
})
app.listen(5623,()=>{
    console.log("server connected")
})