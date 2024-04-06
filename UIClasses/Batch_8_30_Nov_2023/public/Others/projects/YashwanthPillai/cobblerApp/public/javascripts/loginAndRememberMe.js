$(()=>{
    var userNameLogin = localStorage.getItem("userNameLogin");
    var userPwdLogin = localStorage.getItem("userPwdLogin");
    $("#u_Email").val(userNameLogin)
    $("#u_pwd").val(userPwdLogin)
    
    $("#login-button").on("click",  (event)=> {
        console.log(event);
        if($("#remember_Me").is(':checked')){
            if(userNameLogin == null && userPwdLogin == null){
                localStorage.setItem("userNameLogin",$("#u_Email").val())
                localStorage.setItem("userPwdLogin",$("#u_pwd").val())
                $("#remember_Me").prop('checked',false);
    
    
            }else{
                userNameLogin = $("#u_Email").val()
                userPwdLogin = $("#u_pwd").val()
            }
        }
        resetLoginValue()
    });
    
    var resetLoginValue = () =>{
    $("#u_Email").val("") 
    $("#u_pwd").val("")
    
    }
    

})
