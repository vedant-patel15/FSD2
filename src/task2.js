var expr = require("express");
var app = expr();

app.use(expr.static("../public"));
app.get("/form", (req, res) => {
   res.set("content-type", "text/html");

   const inputText = req.query.message;
   const vowels = inputText.match(/[aeiouAEIOU]/g) || [];
   const vowelCount = vowels.length;
   //inputText.match(/[aeiouAEIOU]/g) is used to find all vowels in the input text.
   ///[aeiouAEIOU]/g: The g flag makes the regular expression global, so it finds all occurrences of vowels in the string.
   //The || [] ensures that an empty array is returned if no vowels are found.
   
   const splitText = inputText.split(/([aeiouAEIOU])/);

  for(i in splitText){
       res.write(splitText[i] + "</br>");
   };

   res.write("</br>Vowel count: " + vowelCount);
   res.send();
});

app.listen(5121, () => {
   console.log("server start");
});