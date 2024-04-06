// const { response } = require("express");
var productTemplate;
var pDetails = [];

//http://localhost:8081/AjaxPractice/sampleProductDetails/data/productData.json


var addProductDetails = (productDetails) => {
  productDetails.discountPrice = productDetails.actualPrice - ((productDetails.actualPrice* productDetails.discountPercent) / 100);

  $(".productDetailsContainer").append(productTemplate(productDetails));
  
};

$(document).ready(() => {

  // var template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");         //copied from handlebarjs.com site 
    productTemplate = Handlebars.compile($("#singleProductTmpl").html());
 
  
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