expr=require('express')
app=expr()
cp=require('cookie-parser')
app.use(cp())
app.get('/',(req,res)=>{
    res.cookie('fname','abc')
    res.cookie('lname','pqr')
    res.cookie('email','abc@gmail.com',{maxAge:10000})
    res.cookie('contact','66368513')
    res.clearCookie("contact")
    res.send('cookie started')

})
app.listen(5069)