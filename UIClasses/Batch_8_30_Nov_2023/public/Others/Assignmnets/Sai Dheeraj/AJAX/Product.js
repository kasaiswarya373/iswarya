var pDetails = [];

     // http://localhost:8082/Others/Assignmnets/Sai%20Dheeraj/AJAX/ProductDatajson/productdata.json   
    
   
        

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

    console.log(mainLiTag);
    document.querySelector(".productDetailsContainer").append(mainLiTag);
    };

    



        axios.get('http://localhost:8082/Others/Assignmnets/Sai%20Dheeraj/AJAX/ProductDatajson/productdata.json').then((value) => {
            console.log(value);
            pDetails = value.data.details;
            for (var i = 0; i < pDetails.length; i++) {
                addProductDetails(pDetails[i]);
            }
        }).catch((error) => {
            console.log("error");

        })