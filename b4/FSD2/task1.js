 var fs = require("fs")
 
 fs.writeFileSync("content1.txt","Hello! B4 Students \nWelcome to Node.js Toturial")

 var d=fs.readFileSync("content1.txt","utf-8")
 console.log(d)

 var i=0
 var v="aeiouAEIOU"

 for (let a=0;a<d.length;a++){
    if(v.includes(d[a])){
        i++
    }    
 }

 fs.appendFileSync("content1.txt","\nVowel Count : "+i)
