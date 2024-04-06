var http = require("http");

var server = http.createServer((req, res) => {

  //  res.writeHead(200, {'Content-Type' : 'text/html'}); //if we use this then we'll see html like content on page (we can use, text/html, text/JSON, text/xml)



    var userInfo = {
        "name" : "RG",
        "age"  : 30,
        "gender" : "Male"
    };

    res.end(JSON.stringify(userInfo));
    // res.end("hello everyone...<b>How are you all doing?</b>");
});

server.listen(8081, () => {
    console.log("Server is started at 8081")
});