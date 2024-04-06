
/*var http = require("http");

var server = http.createServer((request, response) => {
    response.end("Hello Royal, Your server got created...");
     
});

server.listen(8081, () => {
    console.log("Hey Royal, Server is started at 8081...");
});*/

var http = require("http")

var server = http.createServer((request, response) => {
    response.end("Your server got created...");
     
});

server.listen(8081, () => {
    console.log("Server is started at 8081...");
})