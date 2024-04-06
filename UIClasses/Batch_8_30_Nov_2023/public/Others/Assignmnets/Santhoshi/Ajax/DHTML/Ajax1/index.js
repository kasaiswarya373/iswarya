var Bdetails = [];

//  http://localhost:8082/Others/Assignmnets/Santhoshi/Ajax%20intro/DHTML/Ajax-intro1/booksdata.json
// http://localhost:8082/Others/Assignmnets/Santhoshi/Ajax%20intro/DHTML/Ajax-intro1/index.js

//http://localhost:8082/10_Feb/DHTML/data/productData.json

// http://localhost:8082/Others/Assignmnets/Santhoshi/Ajax%20intro/DHTML/Ajax-intro1/data/booksdata.json

// http://localhost:8082/Others/Assignmnets/Santhoshi/Ajax/DHTML/Ajax1/data/booksdata.json

var addBookdetails = (bookDetails) => {

   // var mainLiTag = document.createElement("li");
      var mainLiTag = $("<li/>");
   // mainLiTag.setAttribute("class" , "sbookDetails");
      mainLiTag.addClass("sbookDetails");

    //  var ulTag = document.createElement("ul");
        var ulTag = $("<ul/>");

     var imgli = $("<li/>");
     var imgTag = $("<img/>").attr("src", bookDetails.image);
     imgli.append(imgTag);
     ulTag.append(imgli);
   

     var li1 = $("<li/>").text(`Book Name: ${bookDetails.name}`);
     ulTag.append(li1);

     var li2 = $("<li/>").text(`Author name: ${bookDetails.author}`);
     ulTag.append(li2);

     var li3 = $("<li/>").text(`Author name: ${bookDetails.Readingage}`);
     ulTag.append(li3);

     var li4 = $("<li/>").text(`Author name: ${bookDetails.Language}`);
     ulTag.append(li4);

     var li5 = $("<li/>").text(`Author name: ${bookDetails.Publisher}`);
     ulTag.append(li5);

     var li6 = $("<li/>").text(`Author name: ${bookDetails.Price}`);
     ulTag.append(li6);

     mainLiTag.append(ulTag);
     $(".bookDetailsContainer").append(mainLiTag);


}


$(document).ready(() => {
  
axios.get('http://localhost:8082/Others/Assignmnets/Santhoshi/Ajax/DHTML/Ajax1/data/booksdata.json').then
((response) => {
  console.log(response);
  Bdetails = response.data.details;
    for (var i = 0; i < Bdetails.length; i++) {
      addBookdetails(Bdetails[i]);
    }
}).catch((error) => {
  console.log("error");
})

}) 