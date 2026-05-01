express=require("express")
app=express()
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send(`<form action="/data" method="get">
        Username:<input type="text" name ="uname">
        password:<input type="password">
        <input type="Submit">
        </form>`)
})
app.get("/data",(req,res)=>{
    uname=req.query.uname
    res.send(`Welcome ${uname}`)
})
app.listen(5666,()=>{
    console.log("server connected")
})