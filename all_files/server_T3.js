expr=require('express')
app=expr()
app.set('view engine','ejs')
app.use(expr.urlencoded())
app.get('/',(req,res)=>{
    res.render('form_T3')

})
app.post('/data',(req,res)=>{
    t1=parseInt(req.body.t1)
    t2=parseInt(req.body.t2)
    t3=parseInt(req.body.t3)
    t4=parseInt(req.body.t4)
    total=t1+t2+t3+t4

    total1=JSON.parse(t1,t2,t3,t4,total)
    res.render('out1',{total})

})
app.listen(4545)


// multer ,nodemailer , ejs ,cookies,session 
// ch4 only mcq