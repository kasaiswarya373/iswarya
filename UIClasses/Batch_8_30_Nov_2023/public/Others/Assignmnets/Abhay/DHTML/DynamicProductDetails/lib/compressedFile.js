//compressed file
//http://localhost:8082/Others/Assignmnets/Abhay/DHTML/DynamicProductDetails/lib/productData.json

var productDetails = [];
var addProductDetails = (productDetails) => {
    var mainTag = $('<div/>').addClass('product1');

    var div1 = $('<div/>').addClass("img");
    var imgTag = $("<img/>").attr("src", productDetails.image)
    div1.append(imgTag);
    mainTag.append(div1);

    var div2 = $("<div/>").addClass("productName").text(`Product Name : ${productDetails.name}`);
    mainTag.append(div2);

    var div3 = $("<div/>").addClass("productPrice").text(`Product Price : ${productDetails.price}`);
    mainTag.append(div3);

    var div4 = $("<div/>").addClass("productManufacturer").text(`Manufacturer : ${productDetails.manufacturer}`);
    mainTag.append(div4);

    var div5 = $("<div/>").addClass("productRatings").text(`Ratings : ${productDetails.ratings}`);
    mainTag.append(div5);
    $(".wrapper").append(mainTag);
};
$(document).ready(() => {

    // By Fetch Method 
    // fetch("http://localhost:8082/Others/Assignmnets/Abhay/DHTML/DynamicProductDetails/lib/productData.json").then(res =>
    //     res.json()).then((response) => {
    //         console.log("Success");
    //         console.log(response);
    //         productDetails = response.details;
    //         for (var i = 0; i < productDetails.length; i++) {
    //             addProductDetails(productDetails[i])
    //         }
    //     }).catch((error) => {
    //         console.log("error");
    //     });

    //By Axios Library
    axios.get("http://localhost:8082/get/productListAbhay").then((response) => {
        console.log(response);
        console.log("Success");
        productDetails = response.data.details;
        for (var i = 0; i < productDetails.length; i++) {
            addProductDetails(productDetails[i])
        }
    }).catch((error) => {
        console.log("error")
    })
});
