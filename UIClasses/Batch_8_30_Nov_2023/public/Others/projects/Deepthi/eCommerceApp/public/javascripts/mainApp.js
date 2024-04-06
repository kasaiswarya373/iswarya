var loadPage = (type) => {
    console.log(location);
    location.hash = type;
    if(type == 'Login'){
    return;}

    var templateUrl = '';
    switch(type) {
        case 'signup' :
            templateUrl = 'Templates/signUp.htm';
            break;
        case 'home' :
            $('#mainContentBlockArea').html('');
              break; 
        case 'forgotpwd' :
             templateUrl = 'Templates/forgotPassword.htm';  
             break;
        case 'productDetailsList':
            templateUrl = 'Templates/productDetails.htm';   
            break;
        case 'productDetails':
            templateUrl = 'Templates/descriptiveProductDetailsPage.htm';  
            break;
    }
    axios.get(templateUrl).then((response) => {

        if(type == 'signup'){
            $("#mainContentBlockArea").html(response.data);
        }else if(type == 'forgotpwd'){
            $('#pageLoginModel').modal('hide');
            $("#mainContentBlockArea").html(response.data);
        }else if(type == 'productDetailsList'){
            $("#mainContentBlockArea").html(response.data);
            loadProductDetails();
        }else if(type == 'productDetails'){
            // $(".metaContentBlock").hide();            
            $("#mainContentBlockArea").html(response.data);
        }
    })
}


// var getCanvasImage = () => {
//    var image = document.querySelector("#canvasBlock").toDataURL();
//    console.log(image);
// }
// getCanvasImage();

