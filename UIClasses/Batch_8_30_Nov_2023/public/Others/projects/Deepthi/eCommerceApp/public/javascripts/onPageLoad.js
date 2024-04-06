var pageProductId = '';

document.addEventListener('DOMContentLoaded',()=>{

    document.querySelector("#refresh").addEventListener('click',() => {
        getCaptchaValue();
    })

    // console.log(location);
    // const params = new URLSearchParams(location.search);
    // console.log(params);
    // if(params.get("pid")){
    //     // load the product details page 
    //   loadPage('productDetails');
    //   pageProductId = params.get('pid');
    // } 
    loadPage('productDetails');

});