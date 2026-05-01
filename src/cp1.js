expr=require("express")
app=expr()
cp=require("cookie-parser")
app.use(cp())
app.use(expr.static("../public"),{index:"index1.html"})
app.use(expr.urlencoded({extend:true}))
app.post("/html_form",(req,res)=>{
    const{name,email,msg,rating}=req.body
    
    const fb={name,email,msg,rating}
    res.cookie("feedback",fb,{maxAge:10000})
    res.send("<h1>Thank you<h1><a href='/show-fb'>show fb</a>")
})
app.get("/show-fb",(req,res)=>{
    data=req.cookies.feedback
    if(data){
        res.send(`name:${data.name}${data.rating}`)
    }
    else{
        res.send("no data found")
    }
})
app.listen(2345)