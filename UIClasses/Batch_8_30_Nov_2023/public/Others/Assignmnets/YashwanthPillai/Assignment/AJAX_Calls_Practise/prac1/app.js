// http://localhost:8082/Others/Assignmnets/YashwanthPillai/Assignment/AJAX_Calls_Practise/prac1/Data/productDetails.json 

// const { response } = require("express")

var productData =[]
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



// TYPE1 => THROUGH FETCH MEHTHOD. fetch("path").then(res => res.json()).then((response)=>{}).catch((reject)=>{})


// fetch(" http://localhost:8082/Others/Assignmnets/YashwanthPillai/Assignment/AJAX_Calls_Practise/prac1/Data/productDetails.json").then(res => res.json()).then((response,reject)=>{console.log("successful");
// console.log(response);

// productData = response.details
// for(let i = 0 ; i<productData.length ; i++){
//     pDetails(productData[i]);
// }
// }).catch((reject)=>{console.log("error")})


// console.log(productContainer)

// TYPE2 => THROUGH AXIOS

axios.get("http://localhost:8082/Others/Assignmnets/YashwanthPillai/Assignment/AJAX_Calls_Practise/prac1/Data/productDetails.json").then((response)=>{
console.log("SUCCESSFUL");
console.log(response);

productData = response.data.details
for(let i = 0 ; i<productData.length ; i++){
    pDetails(productData[i]);
}
}).catch((reject)=>{
    console.log("ERROR");

})