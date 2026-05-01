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
    if(req.session.fname=="admin" && req.session.pwd=="admin@123"){
        res.send("welcome user")
    }
    else{
        res.send(`pls enter valid username & password <a href='/'>Logout</a>`)
       
    }
})

app.get('/destroy',(req,res)=>{
    res.send(`session destroyed <a href='/'>Logout</a>`)
    req.session.destroy()
    res.redirect("/")
})
app.listen(5689,()=>{
    console.log("server connected")
})