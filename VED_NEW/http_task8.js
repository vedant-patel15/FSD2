// Write node js script to fetch values from url given below and display output as asked.
// "https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
//   1) Data must be written as below in file named “exam.txt”. File name must be fetched from the url given above.
          	// Output:
          	// Hello!
          	// Welcome to LJU FSD2 T1 Test
          	// #AllTheBest
//   2) Read content from file “exam.txt” and send response to server and display data in “/”  page in same format as above  

    //    but in H1 tag and in red color.
//   3) If any other page is requested it shows “Page not found” message in plain text.


process.noDeprecation=true
var url=require('url')

var addr = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
var d= url.parse(addr,true)
var fs=require("fs")
fs.writeFileSync("exam.txt","Hello !")
// qzbypsp@123