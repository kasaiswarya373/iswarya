var practise = require("http");

var server = practise.createServer((request,response) =>{
    response.end("Hello Your First Server Got Created")
})

server.listen(8083,()=>{
    console.log("Server is listing at 8083")
})