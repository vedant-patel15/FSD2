var e=require('events')
var e3=new e()
// e3.addListener("status",(code,msg)=>(
//     console.log(`your status code is ${code} with ${msg} message`)
// ))
// e3.emit("status",200,'ok')


fun=()=>{
    console.log('hey')
}
fun2=()=>{
    console.log("hello")
}

e3.on("Conn",fun)
e3.on("Conn",fun2)

let c=e3.listenerCount("Conn")
console.log(c)
e3.removeListener('Conn',fun)
let d=e3.listenerCount("Conn")
console.log(d)
e3.emit("Conn")
