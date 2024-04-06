document.addEventListener("DOMContentLoaded",() => {
    if(localStorage.getItem("user_name") != null){
        document.querySelector("#uname").value = localStorage.getItem("user_name");
    } 

    if(localStorage.getItem("user_password") != null){
        document.querySelector("#upassword").value = localStorage.getItem("user_password"); 
    }
})

var loginDetails = () => {
    // console.log("checkbox invoked");

    var username = document.querySelector("#uname").value;
    console.log(username);

    localStorage.setItem("user_name",username);

    var password = document.querySelector("#upassword").value;
    console.log(password);

    localStorage.setItem("user_password",password);

}