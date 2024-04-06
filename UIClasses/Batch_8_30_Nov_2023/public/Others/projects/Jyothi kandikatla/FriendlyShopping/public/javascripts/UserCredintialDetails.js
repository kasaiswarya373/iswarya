 var username , password;
     var storeUserCredentials = (event) => {
        if(event.target.checked == true){
        username =  $('#username').val();
        password = $('#password').val();
        localStorage.setItem('#username',username);
        localStorage.setItem('#password',password);
    
    }
}
var fillUserCredintials = () => {
    if(username ==''&& password == ''){
    $('#username').val() = username;
    $('#password').val() = password;
 }
}
