// Templating Pages ::
var SelectedloadPage = (type) => {
    var templateurl = '';
    switch (type) {
        case 'SignUp' :
        templateurl = 'Templates/newsignup.htm';
                break;
            case 'home' :
                $("#mainContentBlockArea").html('');
                break;
            case 'ForgotPwd' :
                templateurl = 'Templates/forgotPwd.htm';
                break;
            case 'productDetails' :
                templateurl = 'Templates/ProductDetailsPage.htm';
                break;
    }
    axios.get(templateurl).then((response) => {
        if (type == 'SignUp') {
            $("#mainContentBlockArea").html(response.data);
            $('#MetaContentBlock').hide();
            

       /* } else if (type == 'login') { 
            $("#mainContentBlockArea").html(response.data); 
           $('.productDetailsContainer').html(response.data); */

        } else  if (type == 'ForgotPwd') {

           $('#staticBackdrop').modal('hide');
            $("#mainContentBlockArea").html(response.data);
            $('#MetaContentBlock').hide();

        } else if (type == 'productDetails') {
            $("#mainContentBlockArea").html(response.data);
            loadProductdetails();
        }   
    })
};

// Local Storage & Session Storage ::
var rememberData = document.querySelector("#RememberMe");
var userData = document.querySelector("#UserAccountId");
var passwordData = document.querySelector("#accountpassword");

if (localStorage.checkbox && localStorage.checkbox !== "") {
    rememberData.checked = true;
    userData.value = localStorage.accountId;
    passwordData.value = localStorage.accountpassword;
} else {
    rememberData.checked = false;
    userData.value = "";
    passwordData.value = "";
}

var UserCheckinData = () => {
    var rememberData = document.querySelector("#RememberMe");
    var userData = document.querySelector("#UserAccountId");
    var passwordData = document.querySelector("#accountpassword");
    if (rememberData.checked &&  userData.value !== "" && passwordData.value !== "") {
        
        localStorage.accountId = userData.value;
        console.log(localStorage.accountId);

        localStorage.accountpassword = passwordData.value;
        console.log(localStorage.accountpassword);

        localStorage.checkbox = rememberData.checked;

    } else {
        localStorage.accountId = "";
        localStorage.accountpassword = "";
        localStorage.checkbox = "";

        console.log(localStorage.accountpassword);
    }
}