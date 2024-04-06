
let productDetails = {
    header: 'Product Details',
    imgUrl: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
    prodName: 'Laptop',
    price: 35500,
    discount: 15,
    manufacturer: 'Sony',
    rating: 4.5
};

let productDetailsInfo = (prodDetails) => {
  
    let mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', "mainDivId");

    document.querySelector('#bodyID').append(mainDiv);

    let ul1 = document.createElement('ul');
    ul1.setAttribute('id', 'ul1Id')
    ul1.setAttribute('class', "ul1Cls");
    document.querySelector('#mainDivId').append(ul1);

    let li1 = document.createElement('li');
    li1.setAttribute('class', 'liCls');
    li1.innerText = `${prodDetails.header}`;
    document.querySelector('.ul1Cls').append(li1);

    let img1 = document.createElement('img');
    img1.setAttribute('id', 'img1');
    img1.setAttribute('src', `${prodDetails.imgUrl}`);
    document.querySelector('#mainDivId').append(img1);

    let ulTag2 = document.createElement('ul');
    ulTag2.setAttribute('id', 'ul2Id');
    ulTag2.setAttribute('class', 'ul1Cls');
    document.querySelector("#mainDivId").append(ulTag2);

    let ulTag2Li1 = document.createElement('li');
    ulTag2Li1.innerText = ` product name : ${prodDetails.prodName}`;
    document.querySelector('#ul2Id').append(ulTag2Li1);

    let ulTag2Li2 = document.createElement('li');
    ulTag2Li2.setAttribute('id', 'priceLi');
    ulTag2Li2.innerText = `Price :`;
    document.querySelector('#ul2Id').append(ulTag2Li2);

    let span1 = document.createElement('span');
    span1.setAttribute('id', 'span1Id');
    span1.innerText = `${prodDetails.price - (prodDetails.price * prodDetails.discount) / 100}`;

    let span2 = document.createElement('span');
    span2.setAttribute('id', 'span2Id');
    span2.innerText = `${prodDetails.price}`;


    document.querySelector('#priceLi').append(span2);
    document.querySelector('#priceLi').append(span1);

    let ulTag2Li3 = document.createElement('li');
    ulTag2Li3.innerText = `Manufacturer : ${prodDetails.manufacturer}`;
    document.querySelector('#ul2Id').append(ulTag2Li3);

    let ulTag2Li4 = document.createElement('li');
    ulTag2Li4.innerText = `Rating : ${prodDetails.rating}`;
    document.querySelector("#ul2Id").append(ulTag2Li4);
}

productDetailsInfo(productDetails);

