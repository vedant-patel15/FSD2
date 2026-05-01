expr=require("express")
app=expr()
const a= (req,res,next)=>{
    req.uname="abc"
    console.log("uname inserted")
    next()
}

const b = (req,res,next)=>{
    req.mark=20+3
    console.log("marks updated")
    next()
}
app.use('/data',a,b)
app.get('/data',(req,res)=>{
    res.send("username"+req.uname+"marks"+req.mark)
})
app.listen(6085)