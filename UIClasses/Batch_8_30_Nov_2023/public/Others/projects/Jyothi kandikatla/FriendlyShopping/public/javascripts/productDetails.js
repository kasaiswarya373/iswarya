var productdetails = {};
var getproductdetails = () =>{
    axios.get('/get/product/details',{params:{}}).then((response) =>{
        productdetails = response.data;
        $('#loginSignupBtnContainer').hide();
        $('#logoutBtnContainer').show();
        addProductsToThePage();  
    })
}
 
var singleProductTemplate = '';
async function loadProductDetails() {
    await axios.get("templates/singleProductTemplate.htm").then((response) => {
        singleProductTemplate = Handlebars.compile(response.data);
        getproductdetails();  
    });
    console.log("done");
}

var addProductsToThePage = () => {
    productdetails.details.forEach((userData, index) => {//add products list to single products template
        userData.ratingid = 'product_' + index;
        userData.discountPrice = userData.price - ((userData.price * userData.discountPercent / 100));
        $("#rightsideContent").append(singleProductTemplate(userData));
        var selector = '#' + userData.ratingid;
        addstar(selector, userData.rating);//add star rating to template
    });
}

var renderSingleProductDetails = (templateHtml) => {
    templateHtml = Handlebars.compile(templateHtml);
    axios.get('/get/product/details', {params: {productId: pageProductId}}).then((response) => {
        console.log('response of selected product details');
        console.log(response.data)
        var selectedProductData = response.data.details[0];
        selectedProductData.discountPrice = selectedProductData.price - ((selectedProductData.price * selectedProductData.discountPercent / 100));
        $("#mainContentBlockArea").html(templateHtml(selectedProductData));
        addstar("#rating_container", selectedProductData.rating);
    });

}

var showSelectedImage = (imageUrl) => {
    var backgroundImage = "url('" + imageUrl + "')";
    $(".mainImage").css("background-image", backgroundImage);
}