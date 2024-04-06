var productDetails =
    [{productname : "TV",
    productprice : 70000,
    productmanu : "lenovo",
    productrating : 4.5 ,
    discount : 10 ,
    imglink : "https://assets.aboutamazon.com/dims4/default/cce7083/2147483647/strip/false/crop/2000x1125+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F55%2Fb7%2F715e834f4e7aa847edc236373c3d%2Ffreevee-hero-2000x1125.jpg"
    },
    {productname : "Iphone 11",
    productprice : 50000,
    productmanu : "Apple",
    productrating : 4 ,
    discount : 10 ,
    imglink : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71ZOtNdaZCL._AC_SY110_.jpg"
    },
    {productname : "Laptop",
    productprice : 90000,
    productmanu : "Dell",
    productrating : 3.5 ,
    discount : 10 ,
    imglink : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/511ZPZUjUVL._AC_UY218_.jpg"
    },
    {productname : "Sony Hometheater",
    productprice : 30000,
    productmanu : "Sony",
    productrating : 5 ,
    discount : 10 ,
    imglink : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71h7fLNEQPL._AC_UY218_.jpg"
    },
    {productname : "Samsung Moniter",
    productprice : 51000,
    productmanu : "Samsung",
    productrating : 4.5 ,
    discount : 10 ,
    imglink : "https://m.media-amazon.com/images/I/817CJPmX5wL._AC_UY218_.jpg"
    }]
    
   var productinfo = (productDetails) => {
    var litag = document.createElement("li");
    litag.setAttribute("class" , "outerbox");
    document.getElementById("imgtag").append(litag);

    var ultag = document.createElement("ul");
    litag.append(ultag);

    var imgtag = document.createElement("img");
    imgtag.setAttribute("src" , productDetails.imglink);
    ultag.append(imgtag)

    var litag1 = document.createElement("li");
    litag1.innerText = (`Name : ${productDetails.productname}`);
    ultag.append(litag1);

    var litag2 = document.createElement("li");
    litag2.innerHTML = (`price : `)
    ultag.append(litag2);

    var spantag = document.createElement("span");
    spantag.setAttribute("class" , "price")
    spantag.innerText = (productDetails.productprice);
    litag2.append(spantag) 

    var spantag1 = document.createElement("span");
    spantag1.innerHTML =(productDetails.productprice-(productDetails.productprice*productDetails.discount)/100);
    litag2.append(spantag1) 
    
    var litag3 = document.createElement("li");
    litag3.innerText = (`Manu : ${productDetails.productmanu}`);
    ultag.append(litag3);

    var litag4 = document.createElement("li");
    litag4.innerText = (`Rating : ${productDetails.productrating}`);
    ultag.append(litag4);
}
// something(productDetails)
for (i=0 ; i < productDetails.length ; i++){
productinfo( productDetails[i])
}

    // console.log(litag);
    // console.log(ultag);
    // console.log(litag1);