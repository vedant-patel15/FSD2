var eventemiter=require('events')

var ee=new eventemiter()

ee.on('first',()=>{console.log("First Task")})
var add=(a,b)=>{console.log(`Addition is : ${a+b}`)}
ee.on('second',add)
ee.on('second',()=>{console.log(`Completed`)})
ee.emit('first')
ee.emit('second',3,6)
