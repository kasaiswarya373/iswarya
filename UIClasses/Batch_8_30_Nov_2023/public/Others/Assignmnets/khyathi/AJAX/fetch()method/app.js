
pDetails=[]

// http://localhost:8081/AJAX/MultipleProdutPage/products.json

var detailsGenerator=(productDetails)=>{
    var mainLiTag=document.createElement('li');
    mainLiTag.setAttribute('class','sProductDetails');
 
    var ulTag=document.createElement('ul');
    mainLiTag.append(ulTag);
    
    var imglitag=document.createElement('li');
    var imgtag=document.createElement('img')
    imgtag.setAttribute('src',productDetails.imgurl);
    imglitag.append(imgtag);
    ulTag.append(imglitag);

    var li1=document.createElement('li');
    li1.innerText="Product Name:" +productDetails.Name;
    ulTag.append(li1);

    var li2=document.createElement('li');
    li2.innerText='Price:'
    ulTag.append(li2);

    var span1=document.createElement('span');
    span1.setAttribute('class','actualPrice')
    span1.innerText=productDetails.actualPrice;
    li2.append(span1);

    var span2=document.createElement('span');
    span2.setAttribute('class','discounPrice')
    span2.innerText=productDetails.actualPrice-(productDetails.actualPrice*productDetails.DiscountPercent)/100;
    li2.append(span2);
     
    var li3=document.createElement('li');
    li3.innerText=`Company:${productDetails.company}`;
    ulTag.append(li3);
     
    var li4=document.createElement('li');
    li4.innerText="Rating:"+productDetails.rating;
    ulTag.append(li4);

    mainLiTag.append(ulTag);
    console.log(mainLiTag);


    document.querySelector('.productContent').append(mainLiTag);
    




    
}


fetch("http://localhost:8081/AJAX/fetch()method/products.json").then(res=>res.json()).then((respons)=>{
    console.log("sucess");
    console.log(respons);
   var details=respons.pDetails;
    for(i=0;i<details.length;i++){
     console.log(details[i]);
     detailsGenerator(details[i])

     }

}).catch((err)=>{
    console.log(err)
console.log("error");
})