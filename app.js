var express = require('express');
var request = require('request');
var urlOfWords = "http://www.freebsd.org/cgi/cvsweb.cgi/src/share/dict/web2?rev=1.12;content-type=text%2Fplain";
var fs = require('fs');

app = express();

app.use("/", express.static(__dirname + '/public') );
app.use("/words", function (req, res){
  request(urlOfWords, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFile("dict.js",  JSON.stringify(body), function(err){
      res.send(body);
    })
  }
  })

});

app.listen(process.env.PORT);
console.log("Listening on port: ", process.env.PORT)