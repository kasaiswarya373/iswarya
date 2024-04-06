var onSelectedContent = (type) =>{
    location.hash = type;
    if (type == "viewCart") {
      showUserCartDetails();
      return;
    }
    if (type == "Login") return;
var templateUrl = '' ;
switch (type){
    case "login":
        $('#openeye').show();
        $('#closedeye').hide();
        $('.SignupContainer').hide();
    break;
    case 'signUp':
        templateUrl = 'templates/SignUp.htm';
       
        break;
        case 'home':
            
            $('#openeye').show();
            $('#closedeye').hide();
           $('.metaContentBlock').show();
            $('#mainContentBlockArea').html('');
        break;
        case 'forgotpwd':
            templateUrl = 'templates/forgotpwd.htm';
            break;
        case 'productList':
            templateUrl = 'templates/productDetailsPage.htm';
        break;
        case 'productDetails':
            templateUrl = 'templates/descriptiveProductDetailsPage.htm';
            break;
}
axios.get(templateUrl).then((response)=>{
    if(type == 'signUp'){
        $('#mainContentBlockArea').html(response.data);
    }else if(type == 'forgotpwd'){
        $('#pageLoginModel').modal('hide');
        $("#mainContentBlockArea").html(response.data);
    }else if (type == 'productList') {
        $("#mainContentBlockArea").html(response.data);
        loadProductDetails();
    }else if(type == 'productDetails'){//page with product details with  more descriptive 
      $('.metaContentBlock').hide();
    
       // $("#mainContentBlockArea").html(response.data);
       renderSingleProductDetails(response.data);
        
    }
})
};
var logoutUser = () => {
    location.hash = "home";
    axios.get("/userSession/logout", {}).then(() => {
      loadSelectedPage("home");
      removeLoggedinUserAccountDetails();
      $("#cartCountValue").text("");
      utilData.showAlert("You've Been Logged Out");
    });
  };


/*
var logoutUser = () => {
    location.hash = 'home';
    axios.get("/userSession/logout", {}).then(() => {
      loadSelectedPage('home');
      removeLoggedinUserAccountDetails();
      $("#cartCountValue").text('');
      utilData.showAlert("User got loggedout");
    })
  
  }*/
  
  /*function ItemAddedToCount() {
    var cartItemCount = document.getElementById("cartItemCount");
    var count = parseInt(cartItemCount.textContent) || 0;
    count++;
    cartItemCount.textContent = count;
  } */