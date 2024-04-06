document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("name") != null) {
       document.querySelector("#u_name").value = localStorage.getItem("name");
    }
    if(localStorage.getItem("password") != null){
        document.querySelector("#u_pwd").value = localStorage.getItem("password");
    }
    // Check if remember me flag is set
    var rememberFlag = localStorage.getItem("rememberFlag");
    if (rememberFlag === "true") {
        document.querySelector("#check").checked = true;
    }
});

var rememberDetails = () => {
    var ans = document.querySelector("#check").checked;
    console.log(ans);
    if (ans) {
        var name = document.querySelector("#u_name").value;
        localStorage.setItem("name", name);
        var pwd = document.querySelector("#u_pwd").value;
        localStorage.setItem("password", pwd);
        // Set the remember me flag
        localStorage.setItem("rememberFlag", "true");
    } else {
        // Clear the remember me flag
        localStorage.removeItem("rememberFlag");
    }
}

 




