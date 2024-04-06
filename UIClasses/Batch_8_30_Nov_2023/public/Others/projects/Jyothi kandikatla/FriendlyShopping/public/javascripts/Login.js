var validateCredentials = () =>{
    validateCaptcha();
    
    var validate = {};
    validate.username = $('#username').val();
    validate.password = $('#password').val();
    console.log(validate);
    /*axios.get('/validate/login/credentials',{params:validate}).then(response =>{
        console.log('sucess');
      
    }).catch(() =>{
        console.log('Error');
    })*/
    axios.post('/validate/login/credentials',validate).then((response) =>{
    console.log('success');
    console.log('response')
    console.log(response)
    if(response.data.msg == 'Valid'){
        utilData.userAccountId =  validate.username;
            showLoggedinUserAccountDetails();
        $('#pageLoginModel').modal('hide');
        $(".metaContentBlock").hide();
        onSelectedContent('productList');
    }else{
        $('#invalidmsgblock').show();
        $('#invalidmsgblock').text('inavalid credentials ,please try again');
    }
    }).catch((err) =>{
        console.log('error')
        console.log(err)
    });
}
/**
 * To hide the login and signup button,s and display user account id within header\enable the logout
 */
var showLoggedinUserAccountDetails = () => {
    
    $(".logoutBtnContainer").show();
    $(".loginSignupBtnContainer").hide();
    $(".wlcomeMsg").show();
    $("#header_userAccountId").html(utilData.userAccountId);
}
var removeLoggedinUserAccountDetails = () => {
    
    $(".logoutBtnContainer").hide();
    $(".loginSignupBtnContainer").show();
    $(".wlcomeMsg").hide();
    $("#header_userAccountId").html('');
}