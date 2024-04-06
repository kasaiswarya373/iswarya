// const { response } = require("express");


var pDetails = [];

//http://localhost:8081/AjaxPractice/sampleProductDetails/data/productData.json


var addProductDetails = (productDetails) => {
  // var mainLiTag = document.createElement("li");
  var mainLiTag = $("<li/>").addClass("sProductDetails");

  var ulTag = $("<ul></ul>");

  var imageli = $("<li/>")
  var imgTag = jQuery("<img/>").attr("src", productDetails.imageUrl);
  imageli.append(imgTag);
  ulTag.append(imageli);

  var li1 = $("<li/>").text(`Product Name: ${productDetails.name}`);
  ulTag.append(li1);

  var li2 = $("<li/>");
  li2.innerText = "Price:";

  var span1 = $("<span />").text(productDetails.actualPrice).addClass("actualPrice");

  var span2 = $("<span />");
  span2.text(
    productDetails.actualPrice -
    (productDetails.actualPrice * productDetails.discountPercent) / 100).addClass("discountedPrice");
  li2.append(span1);
  li2.append(span2);
  ulTag.append(li2);

  var li3 = $("<li/>").text("Manufacturer: " + productDetails.manu);
  ulTag.append(li3);

  var li4 = $("<li/>").text("Rating: " + productDetails.rating);
  ulTag.append(li4);

  mainLiTag.append(ulTag);
  $(".productDetailsContainer").append(mainLiTag);

};

$(document).ready(() => {
 
  
          /*
                //Type 1 - Using fetch() method
              fetch("http://localhost:8081/AjaxPractice/sampleProductDetails/data/productData.json").then(res => 
              res.json()).then((response) => {
                console.log('success');

                pDetails = response.details;
                        for (var i = 0; i < pDetails.length; i++) {
                          addProductDetails(pDetails[i]);
                        }

                console.log(response);
              }).catch((err) => {
                console.log('error');
              });
         

      //Type 2 - JQuery $.ajax() method        (Not recomendded bcz JQuery is based on Ecma-5 version, not ES6)
      $.ajax({
        url : 'http://localhost:8081/AjaxPractice/sampleProductDetails/data/productData.json',
        method : 'GET',
        dataType : 'JSON',
        success : (response) => {
            console.log(response);
            pDetails = response.details;
              for (var i = 0; i < pDetails.length; i++) {
                 addProductDetails(pDetails[i]);
              }
        },
        error : (err) => {
          console.log(error);
        }
      })
  */

      axios.get('http://localhost:8081/AjaxPractice/sampleProductDetails/data/productData.json').then
      ((response) => {
        console.log(response);
        
        pDetails = response.data.details;
        for (var i = 0; i < pDetails.length; i++) {
           addProductDetails(pDetails[i]);
        } 

      }).catch((error) => {
        console.log('error');
      })

})  