var http = require("http");     //http node module (pre-defined)
var fs   =  require("fs");      //file streaming node module for interacting the file content (pre-defined)
const { error } = require("console");

var server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type' : 'text/html'});         //if we use this then we'll see html like content on page (we can use, text/html, text/JSON, text/xml)
    
    /*  fs.readFile("Info/empData1.txt", (error, filedata) => {      //here in node, we use first parameter as "error" otherise in JS we use first paramater as success parameter

        // console.log(error);         //we can see the error on cmd not on chrome console, bcz it's a server not client side

        if(error) {
            res.end("error while reading the file")
        } else {
            res.end(filedata);
        }
    });   */

    
    fs.writeFile("Info/empDataNew.txt", "We can write any text into the new file", (error) => {     //wrightFile always  override the text content, to overcome we have appendFile method
        if(error) {
            res.end("Couldn't able to write into the file")
        } else {
            res.end("Successfully added into the file");
        }
    })
});

server.listen(8081, () => {
    console.log("Server is started at 8081")
});