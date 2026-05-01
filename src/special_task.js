express= require('express')
app= express()
sess= require('express-session')
app.use(sess({
    secret:'This is secret key',
    resave:false,
    saveUninitialized:false,
}))
app.use(express.urlencoded({extended :true}))
app.use(express.static('../public',{index: 'form1.html'}))
app.get('/savesession',(req,res)=>{
    req.session.fname=req.query.fname
    req.session.pwd=req.query.pwd
    res.redirect('/order.html')
})

app.post('/order',(req,res)=>{
    req.session.product=req.body.product
    req.session.quant= req.body.quantity
    res.redirect('/fetch')
})
app.get('/fetch',(req,res)=>{
    res.send(`Welcome ${req.session.fname}<br><br>
        Your ORDER:<br>
        product: ${req.session.product}<br>
        quantity: ${req.session.quant}`)
})

app.listen(7777)