var eventemiter=require('events')
var fs=require('fs')

var ee=new eventemiter()

ee.on('createFolder',()=>{
    if(!fs.existsSync('abcde')){
        fs.mkdirSync("abcde")}
    else{
        console.log(`Already Exists`)
    }
    ee.emit("writeFile")})

ee.on("writeFile",()=>{fs.writeFileSync("abcde/xyz.txt","Hello Everyone!!")})
    
ee.emit("createFolder")

ee.on('append',()=>{
    if(!fs.existsSync('abcde')){
        fs.mkdirSync("abcde")
        fs.writeFileSync("abcde/xyz.txt","Hello Everyone!!")}
    else{
        fs.appendFileSync("abcde/xyz.txt","\nAppended Data!!")
        console.log(`Appended Done`)
    }
})

ee.emit('append')
