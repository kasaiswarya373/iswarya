var productdetails = {
    name:'laptop',
    actualprice: 34567,
    discountpercent: 14,
    manufacturer: 'sony',
    sellerName: 'cns electronics',
    rating: 4.5,
    imageUrl:'https://www.notebookcheck.net/fileadmin/Notebooks/Lenovo/Ideapad_S340-14IWL-81N70056GE/IdeaPad_S340_14IWL_3.jpg'
};
var mainLiTag = document.createElement("li");
mainLiTag.setAttribute('class', 'sproductdetails');


var ulTag = document.createElement("ul")

var imageli = document.createElement("li")
var imgTag = document.createElement('img')
imgTag.setAttribute("src",productdetails.imageUrl);
imageli.append(imgTag);
ulTag.append(imageli);


var li1 = document.createElement("li")
li1.innerText = `product name :laptop $(productdetails.name)`;
ulTag.append(li1);

var li2 = document.createElement("li");
li2.innerText = "price:";

var span1 = document.createElement("span");
span1.innerText = productdetails.actualprice;
span1.setAttribute("class", 'actualprice');

var span2 = document.createElement("span");
span2.innerText = productdetails.actualprice - (productdetails.actualprice * 
productdetails.discountpercent) / 100;
span2.setAttribute("class", "discountedprice");
li2.append(span1);
li2.append(span2);
ulTag.append(li2);


var li3 = document.createElement("li")
li3.innerText = "manufacturer:" + productdetails.manufacturer;
ulTag.append(li3);

var li4 = document.createElement("li")
li4.innerText ="rating:" + productdetails.rating;
ulTag.append(li4);


mainLiTag.append(ulTag);
console.log(mainLiTag)

document.querySelector(".productdetailscontainer").append(mainLiTag)
