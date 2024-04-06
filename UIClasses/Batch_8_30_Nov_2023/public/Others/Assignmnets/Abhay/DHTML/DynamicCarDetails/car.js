let productDetails = [];
let addProductDetails = (productDetails) => {
    let mainTag = document.createElement('div');
    mainTag.setAttribute('class', 'product1');

    let div1 = document.createElement('div');
    div1.setAttribute('class', 'img');
    let imgTag = document.createElement('img');
    imgTag.setAttribute('src', productDetails.image);
    div1.append(imgTag);
    mainTag.append(div1);

    let div2 = document.createElement('div');
    div2.setAttribute('class', 'name');
    div2.innerText = `Car Name: ${productDetails.name}`;
    mainTag.append(div2);

    let div3 = document.createElement('div');
    div3.setAttribute('class', 'company');
    div3.innerText = `Company : ${productDetails.company}`;
    mainTag.append(div3);

    let div4 = document.createElement('div');
    div4.setAttribute('class', 'color');
    div4.innerText = `Color : ${productDetails.color}`;
    mainTag.append(div4);

    let div5 = document.createElement('div');
    div5.setAttribute('class', 'capacity');
    div5.innerText = `Capacity : ${productDetails.capacity}`;
    mainTag.append(div5);
    document.querySelector(".wrapper").append(mainTag);
}
$(document).ready(() => {
    axios.get("http://localhost:2020/DHTML/DynamicCarDetails/productData.json").then((response) => {
        console.log(response);
        console.log("Success");
        productDetails = response.data.details;
        for (var i = 0; i < productDetails.length; i++) {
            addProductDetails(productDetails[i]);
        }
    }).catch((error) => {
        console.log("error");
    })
});