var productdata = {};

var getProductdetailsContent = () => {
    axios.get('/get/productList', {params : {}}).then((response) => {
        productdata = response.data;
        addProductToThePage();
    })
}

var SingleProductTemplate = '';
async function loadProductdetails () {
    await axios.get("Templates/SingleProductDetails.htm").then((response) => {
        SingleProductTemplate = Handlebars.compile(response.data);
        getProductdetailsContent(); 
    });
}
var addProductToThePage = () => {
    productdata.details.forEach((productDetails, index) => {
        productDetails.productId = 'product_' + index;
        productDetails.discountPrice = productDetails.actualPrice - ((productDetails.actualPrice * productDetails.discountPercent / 100));
        $("#rightBlock_productdetails").append(SingleProductTemplate(productDetails));
        SingleProductTemplate(productDetails);

        var id =  '#' + productDetails.productId;
        renderRatingStars(id, productDetails.rating);
    })
}