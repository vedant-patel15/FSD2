var exp=require('express')
var app=exp()
app.use(exp.urlencoded({extended:true}))
app.get('/',(req,res)=>
{
    res.send(`<h1>User Form</h1>
            <form action="/data" method="post">
            Uname : <input type="text" name="uname">
            Age : <input type="text" name="age">
            <button  type="submit">Submit</button>
            </form>`)
})
app.post('/data',(req,res)=>
{
    name=req.body.uname
    age=req.body.age
    res.send("Name is "+name+" & age is "+age)
})
app.listen(7777,()=>{console.log('Server connected.')})