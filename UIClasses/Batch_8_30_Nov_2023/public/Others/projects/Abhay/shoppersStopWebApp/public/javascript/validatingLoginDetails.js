var http = require("http");
var qs = require("querystring");

var server = http.createServer((req, res) => {
    var body = "";
    req.on("data", (data) => {
        body += data;
    });
    req.on("end", () => {
        var obj = qs.parse(body)
        var email = obj.email;
        var pwd = obj.pwd;
        if (email == "abhay@gmail.com" && pwd == "123") {
            res.write("<h1>Login Successful</h1>")
        } else {
            res.write("<h1>Login Failed</h1>")
        }
        res.end();
    });
});

server.listen(3000, () => {
    console.log('Server is listen at port number 3000')
})