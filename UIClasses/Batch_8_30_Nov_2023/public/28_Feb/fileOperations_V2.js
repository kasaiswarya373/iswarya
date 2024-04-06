var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
   
    res.writeHead(200, {'Content-Type': 'text/JSON'}); // text/string, text/JSON, text/XML

  fs.readFile("INFO/empinfo12.txt", (error, filedata) => {
        console.log(error)
        if (error) {
            res.end("error while reading file");
        } else {
            res.end(filedata);
        }
    })

    fs.appendFile("INFO/empinfo12.txt", "new hello1234", (error) => {
        console.log(error)
        if (error) {
            // res.end("couldnt able to write to file");
        } else {
            // res.end("successfly added to file");
        }
    })
});


server.listen(8081, () => {
    console.log("Server is listing at 8081");
})