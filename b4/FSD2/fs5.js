var fs=require("fs")

fs.writeFile("s1.txt","LJ university",(e)=>{
    if(e){console.log(e)}
    else{console.log("Async Task Completed for S1")}})

fs.writeFile("s2.txt","Hii",(e)=>{
    if(e){console.log(e)}
    else{console.log("Async Task Completed for S2")}})

fs.readFile("s1.txt","utf-8",(e,d)=>{
    if(e){throw e}
    else{console.log(d)
        fs.appendFile("s2.txt","\n "+d,(e)=>{
        if(e){console.log(e)}
    else{console.log("Async Task Completed for S2")}})
    }})

fs.readFile("s2.txt","utf-8",(e,d)=>{
    if(e){throw e}
    else{console.log(d)}})

fs.unlink("s1.txt",(e)=>{
    if(e){throw e}
    else{console.log("Deleted S1")}})
