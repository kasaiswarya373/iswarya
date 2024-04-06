document.addEventListener("DOMContentLoaded", () => {
    
    getUserData();
})

var getRememberData = () => {

    var rememberInput = document.querySelector("#u_checkbox").value;

    if (rememberInput) {
        var userName = document.querySelector("#u_name").value;
        localStorage.setItem("uname", userName);
        var password = document.querySelector("#u_pswd").value;
        localStorage.setItem("upassword", password);
        localStorage.setItem("rememberme", remember);
    } else {
        localStorage.removeItem("uname");
        localStorage.removeItem("upassword");
        localStorage.removeItem("rememberme");
    }
    
   
}
var getUserData = () => {
    if (localStorage.getItem("uname") != null) {
        document.querySelector("#u_name").value = localStorage.getItem("uname");
    }
    if (localStorage.getItem("upassword") != null) {
        document.querySelector("#u_pswd").value = localStorage.getItem("upassword");
    }
    if (localStorage.getItem("rememberme") == "true") {
        document.querySelector("#u_checkbox").value = localStorage.getItem("rememberme");
    }
}




