var http = require("http")  
var fs = require("fs")

var server = http.createServer((request , response)=>{
// response.end("Hello, Here You are !")

response.writeHead(200,{'Content-Type': 'text/html'});
// response.end("Hello I am <i>Learning <i>");

// var userInfo = {}
// userInfo.name = "Yash"
// userInfo.age = 22
// userInfo.graduation = "B.Tech"



// response.end(JSON.stringify(userInfo))

// fs.read file is prdefined, where it takes path of file, and two parameters in callback function, one is error which gives response if there problem while readfing file, and filedata reads file.

// fs.readFile("FileInfo/Temp.txt",(error,filedata)=>{

//     if(error){
//         response.end("Error while reading File")
//     }else{
//         response.end(filedata)
//     }
// })

fs.appendFile




// fs.writeFile() is predefined , where it asks for file path,if created file, it will add data, if not it will create one and add data. it takes path, what data to add, and error as parameter in callback method. if the before created file or file has data it overwrites the data and stores the new data

// fs.writeFile("FileInfo/Temp2.txt","Your Determination Defines Your Attitude",(error)=>{

//     if(error){
//         response.end("Error while reading File")
//     }else{
//         response.end("Succesully Added")
//     }
// })


/// To store the old data with new data fs.appendFile() is used.


fs.appendFile("FileInfo/Temp2.txt",". Dont Fear To take First Step",(error)=>{

    if(error){
        response.end("Error while reading File")
    }else{
        response.end("Succesully Added")
    }
})



})

server.listen(8083,()=>{
    console.log("Server is listing at 8083");
})