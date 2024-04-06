var loadSelectedPage = (type) => {
    var templateUrl = "";
    switch (type) {
        case 'signup':
            templateUrl = 'templates/signup.htm';
            break;
        case 'forgetPwd':
            templateUrl = 'templates/forgetPwd.htm';
            break;
        case 'wirelessDopes':
            templateUrl = 'templates/wirelessDopes.htm';
            break;
        case 'home':
            $("#mainContentBlockArea").html(response.data);
            break;
    }
    axios.get(templateUrl).then((response) => {
        if (type == "signup") {
            $("#mainContentBlockArea").html(response.data);
            $("#top-dropdown").hide();
            $("#carouselExampleAutoplaying").hide();
            $("#d-block").hide();
            $(".alert").hide();
            $("#product-index").hide();
        } else if (type == "forgetPwd") {
            $("#loginModal").modal('hide');
            $("#top-dropdown").hide();
            $("#carouselExampleAutoplaying").hide();
            $("#d-block").hide();
            $(".alert").hide();
            $("#product-index").hide();
            $("#mainContentBlockArea").html(response.data);
        } else if (type == "wirelessDopes") {
            $("#loginModal").modal('hide');
            $("#top-dropdown").hide();
            $("#carouselExampleAutoplaying").hide();
            $("#d-block").hide();
            $(".alert").hide();
            $("#product-index").hide();
            $("#mainContentBlockArea").html(response.data);
        }

    })
}

var showMsg = () => {
    alert("You have successfully register!!")
}
