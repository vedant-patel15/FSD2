var EventEmitter=require('events')
var e= new EventEmitter()
e.on('ved',()=>{
    console.log("my name is ved")
})
e.once('ved',()=>{
    console.log("my name is vedant")
})
e.emit('ved')
e.emit('ved')