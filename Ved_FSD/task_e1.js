// Write a Node.js program using the events module to simulate a sequence of events: 

// When a "connection" event occurs, print "Connection successfully" and trigger a "data-received" event.

// When the "data-received" event occurs, print "Data received successfully".

// Finally, print "Thanks" at the end of execution.

var EventEmitter=require('events')
var e= new EventEmitter()

e.on("Connection",()=>{
    console.log("connection successfull")
    e.emit("data-received")
})
e.on("data-received",()=>{
        console.log("Data received successfully")
    })
e.emit("Connection")
console.log("thanks")