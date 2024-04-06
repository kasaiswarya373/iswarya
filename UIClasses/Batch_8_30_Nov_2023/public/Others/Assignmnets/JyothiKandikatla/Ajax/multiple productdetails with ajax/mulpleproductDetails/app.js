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
}


/*document.addEventListener("DOMContentLoaded",() =>{//after complting dom structure and then  it will display
    for (var i = 0; i < MulProducts.length; i++) {
        productDetails(MulProducts[i]);
    }
})*/
/*$(document).ready(() => {// by using jquery after complting dom structure and then  it will display
    
    for (var i = 0; i < MulProducts.length; i++) {
        productDetails(MulProducts[i]);
    }
})*/
  /* Type 1- through fetch method
 
$(document).ready(() => {
    fetch("http://localhost:8081/Ajax/mulpleproductDetails/data/productDetails.json")
    .then(res => res.json()).then((response) => {
        console.log("hi");
        p = response.MulProducts;
        for (var i = 0; i < p.length; i++) {
          productdetails(p[i]);
        }
      }).catch((error) => {
        console.log(error);
    });
 */

  

 //Type 2 - Jquery $.ajax()


/* $(document).ready(() => {
 $.ajax({
  url:"http://localhost:8081/Ajax/mulpleproductDetails/data/productDetails.json",
  method :"GET",
  dtatType :"JSON",
  success :(response) => {
    var p = response.MulProducts;
    for(var i = 0; i < p.length;i++){
      productdetails(p[i]);
    }
  },
  error : (err) =>{
    console.log(err);
  }
 });*/
 
  $(document).ready(() => {
  // axios - external js lib - used to implment ajax calls in js code
  axios.get('http://localhost:8081/mulpleproductDetails/data/productDetails.json').then((response) =>{
    console.log(response);
    p = response.data.MulProducts;
    for(var i = 0; i < p.length;i++){
      productdetails(p[i]);
    }
  }).catch((err) => {
    console.log(err)
  })
});



