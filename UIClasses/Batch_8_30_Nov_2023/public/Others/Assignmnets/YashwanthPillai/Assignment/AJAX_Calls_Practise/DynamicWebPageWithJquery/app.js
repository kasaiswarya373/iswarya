
var productData = [
    {
     name : "Asus VivoBook 16 Laptop" ,
     manu : "Asus",
     actualPrice : 50000, 
     discountPercent : 12,
     rating: "4.5/5",
     image : "https://d2xamzlzrdbdbn.cloudfront.net/products/313fcf41-a3a7-4c2b-a86f-5c52d5b7dde224180647.jpg"
    },
    {
     name : "HP Pavilion Laptop" ,
     manu : "HP",
     actualPrice : 72000, 
     discountPercent : 10,
     rating: "4.3/5",
     image : "https://5.imimg.com/data5/MJ/FD/KN/SELLER-34843688/hp-pavallion-laptop.jpg"
    },
    {
     name : "Lenovo Yoga Laptop" ,
     manu : "Lenovo",
     actualPrice : 80000, 
     discountPercent : 13,
     rating: "3.8/5",
     image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdTjSuisNt1Q7laquPf2VfykqyIeZmNEJYvA&usqp=CAU"
    },
    {
     name : "Dell Inspiron Laptop" ,
     manu : "Dell",
     actualPrice : 80000, 
     discountPercent : 15,
     rating: "4/5",
     image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdcTkt7IwDi-5XDIw_epKlqVvVYcOUnLcxpORxPnOOUJtmvytInbg2DzD98b3GFPx_mU&usqp=CAU"
    }

]

var pDetails = (productData) =>{
var productContainer = $("<div></div>")
productContainer.addClass("productContainer")

var li1 = $("<li/>").addClass("li-img")
var prodImg = $("<img/>").attr("src", productData.image).addClass("prod-img")
li1.append(prodImg)
productContainer.append(li1)


var li2 = $("<li/>").text(`Product Name : ${productData.name} `)
productContainer.append(li2)

var li3 = $("<li/>").text(`Manufracturer : ${productData.manu} `)
productContainer.append(li3)

var li4 = $("<li/>").text(`Price : `)
var span1 = $("<span/>").addClass("actual-price").text(productData.actualPrice)
li4.append(span1)
var span2 = $("<span/>").addClass("discount-price").text(productData.actualPrice - (productData.actualPrice * productData.discountPercent)/100)
li4.append(span2)
productContainer.append(li4)


var li6 = $("<li/>").text(`Ratings :  ${productData.rating} `)
productContainer.append(li6)

$(".container").append(productContainer)




}

for(let i = 0 ; i<productData.length ; i++){
    pDetails(productData[i]);
}

// console.log(productContainer)