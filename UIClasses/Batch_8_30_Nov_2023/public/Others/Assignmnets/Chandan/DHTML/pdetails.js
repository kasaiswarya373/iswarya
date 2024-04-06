var prdDetails = [
    {

          name: 'mobile',
          actualprice: 21000,
          discountedprice: 20,
          manufacturer: 'Vivo',
          sellername:'cds electronics',
          rating: 4.7,
          ImageUrl:
          "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1696919264819/883afd607c31d38d4b0702d700286be7.png",
    },
    {

        name: 'mobile',
        actualprice: 39000,
        discountedprice: 14,
        manufacturer: 'oppo',
        sellername:'acd electronics',
        rating: 4.1,
        ImageUrl:
        "https://m.media-amazon.com/images/I/8104evx11QL._AC_UF1000,1000_QL80_.jpg",
   },
   {

    name: 'mobile',
    actualprice: 13000,
    discountedprice: 10,
    manufacturer: 'samsung',
    sellername:'bgtr electronics',
    rating: 4.0,
    ImageUrl:
    "https://img.etimg.com/photo/msid-98945112,imgsize-13860/SamsungGalaxyS23Ultra.jpg",
   },
   {

    name: 'mobile',
    actualprice: 54321,
    discountedprice: 15,
    manufacturer: 'realme',
    sellername:'cds electronics',
    rating: 4.9,
    ImageUrl:
    "https://www.91-img.com/gallery_images_uploads/7/7/77aa0692b7ae728bcfe340b88e0600fe5b924fdc.jpeg?tr=h-550,w-0,c-at_max",
   }

];

var renderPDetails = (pDetails) => {
var mainLiTag = document.createElement("li");
mainLiTag.setAttribute("class", 'MproductDetails');


var ulTag = document.createElement("ul");

var imgageli = document.createElement("li");
var imgTag = document.createElement("img");
imgTag.setAttribute("src",pDetails.ImageUrl);
imgageli.append(imgTag);
ulTag.append(imgageli);

var li1 = document.createElement("li1");
li1.innerText = 'product name: mobile';
ulTag.append(li1);

var li2 = document.createElement("li");
li2.innerText = "price";

var span1 = document.createElement("span");
span1.innerText = pDetails.actualprice;
span1.setAttribute("class", 'actualprice');

var span2 = document.createElement("span");
span2.innerText = pDetails.actualprice - (pDetails.actualprice*pDetails.discountedprice)/100;
span2.setAttribute("class", 'discountedprice');
li2.append(span1);
li2.append(span2);

ulTag.append(li2);

var li3 = document.createElement("li");
li3.innerText = "manufacturer:" + pDetails.manufacturer;
ulTag.append(li3);

var li4 = document.createElement("li");
li4.innerText = "rating:" + pDetails.rating;
ulTag.append(li4);




mainLiTag.append(ulTag);

console.log(mainLiTag);

document.querySelector(".productDetailscontainer").append(mainLiTag);

}

for(var i = 0; i < prdDetails.length;i++) {
    renderPDetails(prdDetails[i]);
}