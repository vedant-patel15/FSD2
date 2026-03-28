// Write a node js script to write the text “This is data” to new.txt file. After that append the 
// text “that is data” to same ne .txt file. After that read the file and print file concept on 
// console. After finishing read operation, print the line “Thanks for using my program” on console. 
// All read/write operations are asynchronous. (using Event)

var fs = require("fs")
var e= require("events")
var ee=new e()

ee.on("write",()=>{
    fs.writeFile("new.txt","this is data ",(err)=>{
        if(err) throw err
        console.log("write done")
        ee.emit("append")
    })
})

ee.on("append",()=>{
    fs.appendFile("new.txt","this is data ",(err)=>{
        if(err) throw err
        console.log("append done")
        ee.emit("read")
    })
})

ee.on("read",()=>{
    fs.readFile("new.txt","utf-8",(err,data)=>{
        if(err) throw err
        console.log(data)
        ee.emit("final")
    })
})

ee.on("final",()=>{
    console.log("thank you for using programm")
})

ee.emit("write")