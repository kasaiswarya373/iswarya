var pDetails = [];
var productTemplate;

// http://localhost:8082/10_Feb/DHTML/data/productData.json



var addProductDetails = (productDetails, index) => {

 /* take the tempalte content(html)

  inject the Object data(productDetails) to the tempalte 


  show the tempalte with content on page
*/


  // productDetails.isActive = (productDetails.name == 'TV') ? true : false;
  productDetails.productId = 'product_' + index;
  productDetails.discountPrice = productDetails.actualPrice - ((productDetails.actualPrice* productDetails.discountPercent) / 100);

  // fill thedata usting productDetails to the template 

   // returing the tempalte along with data filled
  $(".productDetailsContainer").append(productTemplate(productDetails));

  var productId = '#' + productDetails.productId;
  renderRatingStars(productId, productDetails.rating);

};



$(document).ready(() => {

  axios.get("http://localhost:8082/15_Feb/DHTML_Ajax_Templating/templates/singleproductTmplt.htm").then((response) => {
    productTemplate = Handlebars.compile(response.data);
  })

  
  
  // axios - external js lib - used to implment ajax calls in js code
  axios.get('http://localhost:8082/get/productList1').then
  ((response) => {
    $(".loadingBlock").hide();
    console.log(response);
    pDetails = response.data.details;
      for (var i = 0; i < pDetails.length; i++) {
        addProductDetails(pDetails[i], i);
      }
  }).catch((error) => {
    console.log(error);
    $(".errorBlock").show();
    $(".loadingBlock").hide();
      console.log("error");
  })

}) 



