var fs= require('fs')
fs.writeFileSync("hello.txt", "good morning")
fs.appendFileSync( "hi.txt", "it is a warm day" )

var data = fs.readFileSync("hello.txt")
console.log(data) //buffer data
console.log(data.toString()) //original data

var data= fs.readFileSync("hello.txt", "utf-8")  // to print original data
 console.log(data)


fs.renameSync("hello.txt" ,"v.txt") // change name of file


// fs.unlinkSync("hi.txt") // to delete file
console.log("hi.txt")
console.log("pefdsf")