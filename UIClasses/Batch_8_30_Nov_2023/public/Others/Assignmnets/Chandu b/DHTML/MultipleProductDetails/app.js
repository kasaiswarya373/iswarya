var pDetails = [
    {
        "name": "Laptop",
        "actualPrice": 60000,
        "discountPercent": 10,
        "manu": "Dell",
        "sellerName": "Abc Elec",
        "rating": 4.7,
        "imageUrl":
        "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/13-3320/media-gallery/peripherals_laptop_latitude_3320_gallery_1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3337&hei=2417&qlt=100,1&resMode=sharp2&size=3337,2417&chrss=full&imwidth=5000"
    },
    {
        "name": "Mobile",
        "actualPrice": 80000,
        "discountPercent": 6,
        "manu": "Apple",
        "sellerName": "hello Elec",
        "rating": 4.5,
        "imageUrl": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818"
    },
    {
        "name": "Tv",
        "actualPrice": 45000,
        "discountPercent": 10,
        "manu": "Mi",
        "sellerName": "Mi Elec",
        "rating": 4.4,
        "imageUrl": "https://i01.appmifile.com/webfile/globalimg/products/m/mi-tv-4x-55/overview-3_TV.png"
    },
    {
        "name": "Speakers",
        "actualPrice": 18000,
        "discountPercent": 3,
        "manu": "Sony",
        "sellerName": "Sony Elec",
        "rating": 4.1,
        "imageUrl": "https://www.sony.co.in/image/3d3a90045fd945574b42b191f60f34e6?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
    },
];

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
  for (var i = 0; i < pDetails.length; i++) {
    addProductDetails(pDetails[i]);
  }
})