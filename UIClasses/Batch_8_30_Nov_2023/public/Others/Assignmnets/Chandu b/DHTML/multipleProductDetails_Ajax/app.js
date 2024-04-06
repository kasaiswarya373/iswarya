var pDetails = []

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

$(document).ready (() => {
    axios.get('http://localhost:8081/multipleProductDetails_Ajax/Ajax.html').then
  ((response) => {
    $(".loadingBlock").hide();
    console.log(response);
    pDetails = response.data.details;
      for (var i = 0; i < pDetails.length; i++) {
        addProductDetails(pDetails[i]);
      }
  }).catch((error) => {
    $(".errorBlock").show();
    $(".loadingBlock").hide();
      console.log("error");
  })
})