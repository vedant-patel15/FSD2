var url= require('url')
var addr = "http://localhost:8080/data?month=march&year:2028#about"
var d= url.parse(addr,true)
leap=d.query.year
if(leap%4==0){
    console.log("year is leap year")
}
else{
    console.log("not aleap year")
}
process.noDeprecation=true