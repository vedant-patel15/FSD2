var e=require('events')
var ee=new e()
fun=()=>{
    console.log('hey')
}
fun2=()=>{
    console.log("hello")
}

ee.on("a",fun)
ee.on("b",fun2)
ee.emit("b")
ee.emit("a")