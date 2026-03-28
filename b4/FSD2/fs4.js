var fs=require("fs")

fs.writeFileSync("b4.txt","Hello")
console.log("Sync task Completed")
fs.writeFile("b5.txt","Hii",(e)=>{
    if(e){console.log(e)}
    else{console.log("Async Task Completed")}})
console.log("Last execution")
