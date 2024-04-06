var productDetails = [
  {
    imageUrl:
      "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08454578.png",
    name: "HP Pavilion",
    actualPrice: 50000,
    discountPercent: 12,
    manufacturer: "HP",
    ratings: 4.5,
  },
  {
    imageUrl:
      "https://i.gadgets360cdn.com/products/large/asus-rog-strix-g17-1200x800-1615983283.jpg",
    name: "Asus ROG",
    actualPrice: 90000,
    discountPercent: 12,
    manufacturer: "Asus",
    ratings: 3.5,
  },
  {
    imageUrl:
      "https://images-cdn.ubuy.co.in/63504a51cd9ec93d6a33b0cc-2015-apple-macbook-pro-with-intel-i7.jpg",
    name: "Macbook Pro",
    actualPrice: 150000,
    discountPercent: 2,
    manufacturer: "Apple",
    ratings: 5,
  },
];

var addProductDetails = (productDetails) => {
  var mainLiTag = $("<li/>").addClass("ProductDetails");

  var ulTag = $("<ul/>");

  var imageli = $("<li/>");
  var imgTag = $("<img/>").attr("src", productDetails.imageUrl);
  imageli.append(imgTag);
  ulTag.append(imageli);

  var li1 = $("<li/>").text(`Product Name: ${productDetails.name}`);
  ulTag.append(li1);

  var li2 = $("<li/>");
  li2.innerText = "Price:";

  var span1 = $("<span />")
    .addClass("actualPrice")
    .text(productDetails.actualPrice);

  var span2 = $("<span />");
  span2
    .text(
      productDetails.actualPrice -
        (productDetails.actualPrice * productDetails.discountPercent) / 100
    )
    .addClass("discountedPrice");
  li2.append(span1);
  li2.append(span2);
  ulTag.append(li2);

  var li3 = $("<li/>")
    .addClass("productManufacturer")
    .text(`Manufacturer:  ${productDetails.manufacturer}`);
  ulTag.append(li3);

  var li4 = $("<li/>")
    .addClass("productRatings")
    .text(`Ratings:  ${productDetails.ratings}`);
  ulTag.append(li4);

  mainLiTag.append(ulTag);
  $(".Container").append(mainLiTag);
};

$(document).ready(() => {
  for (var i = 0; i < productDetails.length; i++) {
    addProductDetails(productDetails[i]);
  }
});
