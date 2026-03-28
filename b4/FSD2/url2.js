var url= require('url')

var addr="https://video.google.com:8080/about?t1=20&t2=22&t3=18#students"
// var addr1="https://wikimediafoundation.org/wikipedia25/wikipedia-mascot/?utm_campaign=eepp&utm_source=eepp&utm_medium=eepp"
process.noDeprecation=true

var upp=url.parse(addr,true)
var up=JSON.stringify(upp)

console.log(up)

var t1=up.query.t1
var t2=up.query.t2
var t3=up.query.t3
sum=(t1+t2+t3)
avg=sum/3

console.log(`Average of all The marks is : ${avg}`)
