var eventemiter=require('events')
var ee=new eventemiter()

var f1=(x)=>{console.log(`Message from function 1 is ${x}`)}
var f2=(x)=>{console.log(`Message from function 2 is ${x}`)}

ee.on("event1",f1)
ee.on("event1",f2)
ee.on("event2",f1)
ee.on("event2",f2)

var c=ee.listenerCount('event1')
console.log(`Count is : ${c}`)

ee.emit("event1","B4")
ee.emit("event2","FSD2")

ee.removeListener('event1',f2)
ee.removeAllListeners('event2')


var c1=ee.listenerCount("event2")
console.log(c1)