var url= require('url')

var addr="https://video.google.com:8080/about?id=20&year=2027#students"
// var addr1="https://wikimediafoundation.org/wikipedia25/wikipedia-mascot/?utm_campaign=eepp&utm_source=eepp&utm_medium=eepp"

var up=url.parse(addr,true)
console.log(up)
process.noDeprecation=true




var y=up.query['year']

if(y%4==0){
    console.log(`${y} is a leap year`)
}
else{
    console.log(`${y} is not a leap year`)
}