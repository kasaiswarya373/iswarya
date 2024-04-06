var pDetails = [
  {
    name: "Laptop",
    actualPrice: 30000,
    discountPercent: 12,
    manu: "Dell",
    sellerName: "Abc Elec",
    rating: 4.5,
    imageUrl:
      "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "TV",
    actualPrice: 32000,
    discountPercent: 12,
    manu: "Sony",
    sellerName: "Abc Elec",
    rating: 3.5,
    imageUrl:
      "https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_1100,f_auto,q_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/b3460ec0-6a8a-11ea-9a43-8a541dae4315.jpg",
  },
  {
    name: "Mobile",
    actualPrice: 45000,
    discountPercent: 2,
    manu: "Apple",
    sellerName: "Indian Elec",
    rating: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ycwAVbGQmB6zlAugD6gh9YIMSJeUMPZFSg&usqp=CAU",
  },
  {
    name: "Hardisk",
    actualPrice: 1000,
    discountPercent: 7,
    manu: "Sacndisk",
    sellerName: "Test Elec",
    rating: 2.5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQiLHrDqRrJ_THVYv9UqOiwdVjo0G8o6IVLw&usqp=CAU",
  },
];

var addProductDetails = (productDetails) => {
  var mainLiTag = document.createElement("li");
  mainLiTag.setAttribute("class", "sProductDetails");

  var ulTag = document.createElement("ul");

  var imageli = document.createElement("li");
  var imgTag = document.createElement("img");
  imgTag.setAttribute("src", productDetails.imageUrl);
  imageli.append(imgTag);
  ulTag.append(imageli);

  var li1 = document.createElement("li");
  li1.innerText = `Product Name: ${productDetails.name}`;
  ulTag.append(li1);

  var li2 = document.createElement("li");
  li2.innerText = "Price:";

  var span1 = document.createElement("span");
  span1.innerText = productDetails.actualPrice;
  span1.setAttribute("class", "actualPrice");

  var span2 = document.createElement("span");
  span2.innerText =
    productDetails.actualPrice -
    (productDetails.actualPrice * productDetails.discountPercent) / 100;
  span2.setAttribute("class", "discountedPrice");
  li2.append(span1);
  li2.append(span2);
  ulTag.append(li2);

  var li3 = document.createElement("li");
  li3.innerText = "Manufacturer: " + productDetails.manu;
  ulTag.append(li3);

  var li4 = document.createElement("li");
  li4.innerText = "Rating: " + productDetails.rating;
  ulTag.append(li4);

  mainLiTag.append(ulTag);

  document.querySelector(".productDetailsContainer ").append(mainLiTag);
};

for (var i = 0; i < pDetails.length; i++) {
  addProductDetails(pDetails[i]);
}
