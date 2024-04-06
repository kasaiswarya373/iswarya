var MulProducts = [
    {
    imgurl : 'https://tse4.mm.bing.net/th?id=OIP.OVyp1nRXTnhhZNiLJ5iLrQHaHa&pid=Api&P=0&h=220',
    name : 'Mobile',
    Price : 15000,
    disccount : '20',
    company :'oppo',
    rating : 3.5
},
{
    imgurl : 'https://tse1.mm.bing.net/th?id=OIP.MGpmngAnrgi3TdcEreEnPwHaFj&pid=Api&rs=1&c=1&qlt=95&w=152&h=113',
    name : 'TV ',
    Price : 25000,
    disccount : '5',
    company :'LG',
    rating : 4.5
},
{
    imgurl : 'https://tse1.mm.bing.net/th?id=OIP.JD8x3HC2NBB_g6sPG63HuQHaEi&pid=Api&P=0&h=220',
    name : 'Laptop ',
    Price : 70000,
    disccount : '10',
    company :'Apple',
    rating : 5
},
{
    imgurl : 'https://sp.yimg.com/ib/th?id=OIP.CpcMUrOcV9B5ttaB4dfxOAHaI4&pid=Api&w=148&h=148&c=7&dpr=2&rs=1',
    name : 'Shoes ',
    Price : 2000,
    disccount : '15',
    company :'LeeCouper',
    rating : 4
}
];
var productDetails = (mobile) =>{
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
for (var i = 0; i < MulProducts.length; i++) {
    productDetails(MulProducts[i]);
}
