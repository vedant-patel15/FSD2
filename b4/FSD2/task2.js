var fs = require("fs")

var data={d:{a:10,b:20,c:[30,20]}}
d=JSON.stringify(data)
fs.writeFileSync("calc.txt",d+"")

var x=fs.readFileSync("calc.txt","utf-8")

y=JSON.parse(x)
console.log(y)

fs.appendFileSync("calc.txt","\nAddition of a and b is : "+ (y.d.a+y.d.b) +"\nSubstraction of 2nd element of c and b : "+ (y.d.c[0]-y.d.b) +"\nMultiplication of both elements of c : "+ (y.d.c[0]*y.d.c[1]) )

