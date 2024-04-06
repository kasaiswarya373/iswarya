var http = require("http");

console.log("Test")

var server = http.createServer((req, res) => {
    if (true) {
        res.writeHead(200, {'Content-Type': 'text/JSON'}); // text/string, text/JSON, text/XML
    }
    var userInfo = {
        name: 'Raj',
        age: 20,
        gender: 'Male'
    };

    res.end(JSON.stringify(userInfo));
    // res.end("Hello every one <b>How all are doing</b>");
});


server.listen(8081, () => {
    console.log("Server is listing at 8081");
})