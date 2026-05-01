exp=require('express')
app=exp()
sess=require('express-session')
app.use(sess({secret:"this is key",
    resave:false,
    saveUninitialized:false
}))

app.get("/",(req,res)=>{
    if(req.session.a){
        req.session.a++
        res.send(`you visited thw server ${req.session.a} times`)
    }
    else{
        req.session.a=1
        res.send("welcome to the website")

    }
})

app.listen(5555,()=>{
    console.log("server connected")
})