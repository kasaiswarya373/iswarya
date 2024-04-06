var pDetails = [
   {
        name: "Laptop",
        actualPrice: 75000,
        discountPercent: 15,
        manu: "HP",
        sellerName: "ABC Electronics",
        rating: 3.9,
        imageUrl:
          "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
        name: "Smartphone",
        actualPrice: 50000,
        discountPercent: 10,
        manu: "Samsung",
        sellerName: "XYZ Electronics",
        rating: 4.2,
        imageUrl:
          "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m33-1.jpg",
    },
    {
        name: "Washing Maching",
        actualPrice: 34000,
        discountPercent: 12,
        manu: "Bosch",
        sellerName: "MNO Electronics",
        rating: 4.9,
        imageUrl:
          "https://www.shutterstock.com/image-photo/white-washing-machine-on-isolated-260nw-2208129645.jpg",
    },
    {
        name: "Printer",
        actualPrice: 21000,
        discountPercent: 8,
        manu: "IKEA",
        sellerName: "RG Electronics",
        rating: 4.1,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW91lezpuZfLhyFQBMsp34BL-uEgHnluRR6g&usqp=CAU",
    },
    {
        name: "Inverter",
        actualPrice: 25000,
        discountPercent: 15,
        manu: "Luminous",
        sellerName: "DG Electronics",
        rating: 4.6,
        imageUrl:
          "https://frequip.com/wp-content/uploads/2021/05/Inverter-Battery-on-rent.jpg",
    }
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
    span1.innerText = productDetails.actualPrice+' ';
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

    console.log(mainLiTag);

    document.querySelector(".productDetailsContainer").append(mainLiTag);
}

  for (var i = 0; i < pDetails.length; i++){

    addProductDetails(pDetails[i]);
  }
