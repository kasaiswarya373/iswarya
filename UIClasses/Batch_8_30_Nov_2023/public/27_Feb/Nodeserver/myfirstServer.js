var http = require("http");

var server = http.createServer((request, response) => {
    response.end ("hello i got created");
});


server.listen(8081, () => {
    console.log("Server is listing at 8081");
});