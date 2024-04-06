var productData = {};

var getProductDetailsContent = () => {
  axios.get("/get/productList", { params: {} }).then((response) => {
    productData = response.data;
    addProductsToThePage();
  });
};

var singleProductTemplate = "";
async function loadProductDetails() {
  await axios.get("templates/singleProductDetails.htm").then((response) => {
    singleProductTemplate = Handlebars.compile(response.data);
    getProductDetailsContent();
  });
}

var addProductsToThePage = () => {
  productData.details.forEach((productDetails, index) => {
    productDetails.productId = "product_" + index;
    productDetails.discountPrice =
      productDetails.actualPrice -
      (productDetails.actualPrice * productDetails.discountPercent) / 100;
    $("#rightBlock_productDetails").append(
      singleProductTemplate(productDetails)
    );
    var selector = "#" + productDetails.productId;
    renderRatingStars(selector, productDetails.rating);
  });
};

var renderSingleProductDetails = (id) => {
  alert(id);
};
