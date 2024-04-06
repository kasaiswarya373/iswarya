// Uncompressed file
var productDetails = [{
    image: "https://img.global.news.samsung.com/in/wp-content/uploads/2023/07/001-galaxy-zflip5-zfold5-press-release.jpg",
    name: "Samsung galaxy z fold 5",
    price: "164999 rs",
    manufacturer: "Samsung",
    ratings: "4.5"
},
{
    image: "https://www.digitaltrends.com/wp-content/uploads/2023/02/samsung-galaxy-s23-ultra-green-back-6.jpg?fit=2000%2C1333&p=1",
    name: "Samsung galaxy S23 Ultra",
    price: "154999 rs",
    manufacturer: "Samsung",
    ratings: "4.8"
}, {
    image: "https://asset.kompas.com/crops/WmL9QcYVgfxqw5bKmv4ZWNxWQXI=/0x0:7893x5262/750x500/data/photo/2023/10/04/651d1fdad24f2.jpg",
    name: "Samsung galaxy S23 FE",
    price: "134999 rs",
    manufacturer: "Samsung",
    ratings: "4.6"
},];
let addProductDetails = (productDetails) => {
    var mainTag = document.createElement('div');
    mainTag.setAttribute("class", "product1");

    var div1 = document.createElement("div");
    div1.setAttribute("class", "img");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", productDetails.image)
    div1.append(imgTag);
    mainTag.append(div1);

    var div2 = document.createElement("div");
    div2.setAttribute("class", "productName");
    div2.innerText = `Product Name : ${productDetails.name}`;
    mainTag.append(div2);

    var div3 = document.createElement("div");
    div3.setAttribute("class", "productPrice");
    div3.innerText = `Product Price : ${productDetails.price}`;
    mainTag.append(div3);

    var div4 = document.createElement("div");
    div4.setAttribute("class", "productManufacturer");
    div4.innerText = `Manufacturer : ${productDetails.manufacturer}`;
    mainTag.append(div4);

    var div5 = document.createElement("div");
    div5.setAttribute("class", "productRatings");
    div5.innerText = `Ratings : ${productDetails.ratings}`;
    mainTag.append(div5);
    document.querySelector(".wrapper").append(mainTag);
}
for (var i = 0; i < productDetails.length; i++) {
    addProductDetails(productDetails[i])
}