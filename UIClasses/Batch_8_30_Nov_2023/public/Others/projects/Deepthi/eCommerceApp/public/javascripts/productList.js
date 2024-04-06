var productData = { };

var getProductDetails = () => {
    axios.get('/get/productDetailsList',{params:{}}).then((response) => {
        productData = response.data;
        addProductsToPage(productData);

    })
 
}

  var singleProductTmplt = '';
async function loadProductDetails() {
    await axios.get('Templates/singleProductTmplt.htm').then((response) => {
        console.log(response);
        singleProductTmplt = Handlebars.compile(response.data);
       getProductDetails();
    });
        console.log("done");
}

var addProductsToPage = (productData) => {
    productData.details.forEach((productDetails,index) => {
        productDetails.productId = 'product_' + index;
        productDetails.discountPrice = productDetails.actualPrice - ((productDetails.actualPrice * productDetails.discountPercent / 100));
        $("#rightDetailsBlock").append(singleProductTmplt(productDetails));
       var selector = '#' + productDetails.productId;
        renderRatingStars(selector,productDetails.rating);
    })
}

var renderSingleProductDetails = (id) => {
    alert(id);
}
