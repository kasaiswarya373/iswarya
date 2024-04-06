var mobile = {
    imgurl : 'https://tse4.mm.bing.net/th?id=OIP.OVyp1nRXTnhhZNiLJ5iLrQHaHa&pid=Api&P=0&h=220',
    name : 'Oppo A5',
    Price : 15000,
    disccount : '20',
    company :'oppo',
    rating : 4.5
}
var productDetails = () =>{
var mainlitag =document.createElement('li');
mainlitag.setAttribute('class','mainli');
var ultag = document.createElement('ul');
mainlitag.append(ultag);
ultag.setAttribute('class','outerblock');
var imglitag = document.createElement('li');
var imgtag = document.createElement('img');
imgtag.setAttribute('src',mobile.imgurl);
imglitag.append(imgtag);
ultag.append(imglitag); 
var litag2 = document.createElement('li');
litag2.innerText =  `Product Name: ${mobile.name}`;
ultag.append(litag2);
var litag3 = document.createElement('li');
litag3.innerText =  ` price: `;
var spantag1 = document.createElement('span');
spantag1.setAttribute('class','price');
spantag1.innerText = mobile.Price;
litag3.append(spantag1);
var spantag2 = document.createElement('span');
spantag2.setAttribute('class','discprice');
var disc = mobile.Price -((mobile.Price * mobile.disccount) / 100);
spantag2.innerText = disc;
litag3.append(spantag2);
ultag.append(litag3);
var litag4 = document.createElement('li');        
ultag.append(litag4);
litag4.innerText = `Company : ${mobile.company}`;
var litag5 = document.createElement('li');
litag5.innerText =`Rating :${mobile.rating}`;
ultag.append(litag5);
console.log(mainlitag);
document.querySelector('.productDetailsContainer').append(mainlitag);
}
productDetails();