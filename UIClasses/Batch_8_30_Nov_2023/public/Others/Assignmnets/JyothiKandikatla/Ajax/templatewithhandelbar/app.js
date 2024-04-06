var p = [];
var productdetails = (products) =>{
var mainlitag = $('<li/>').addClass('mainli');
var ultag =$('<ul/>').addClass('outerblock');
mainlitag.append(ultag);
////http://localhost:8081/Ajax/mulpleproductDetails/multipleProductDetails.html

var imglitag = $('<li/>');
var imgtag = $('<img>').attr('src',products.imgurl);
imglitag.append(imgtag);
ultag.append(imglitag); 
var litag2  = $('<li/>').text( `Product Name: ${products.name}`);
ultag.append(litag2);
var litag3 = $('<li/>').text(` price: `);
var spantag1 = $('<span/>').addClass('price').text(products.Price)
litag3.append(spantag1);
var spantag2 = $('<span/>').addClass('discprice');

var disc = products.Price -((products.Price * products.disccount) / 100);
spantag2.text( disc);
litag3.append(spantag2);
ultag.append(litag3);
var litag4 = $('<li/>').text( `Company : ${products.company}`);        
ultag.append(litag4);
console.log(products);

var litag5 = $('<li/>').text (`Rating :${products.rating}`);
ultag.append(litag5);
console.log(mainlitag);
$('.productDetailsContainer').append(mainlitag);


console.log(mainlitag);
}
$(document).ready(() => {
 
  // axios - external js lib - used to implment ajax calls in js code
  axios.get('http://localhost:8081/templatewithhandelbar/data/productDetails.json').
  then((response) =>{
  
    $('.loadingBlock').hide();
    console.log(response);
    p = response.data.MulProducts;
    for(var i = 0; i < p.length;i++){
      productdetails(p[i]);
    }
  }).catch((err) => {
    $('.loadingBlock').hide();
    $('.errorBlock').show();
    console.log(err)
  })
});

