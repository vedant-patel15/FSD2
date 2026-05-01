expr=require('express')
app=expr()
app.set('view engine','ejs')
app.use(expr.urlencoded())
app.get('/',(req,res)=>{
    res.render('form')

})
app.post('/data',(req,res)=>{
    res.send(`${req.body.fname} has ${req.body.mark} marks`)

})
app.listen(5623)