

$("#signup").on( "click", function() {
    let userName = $("#Uname").val()
    let userEmail = $("#Email").val()
    let userPwd = $("#Pwd").val()
    
    if(userName && userEmail && userPwd){
 
        let userDetails = {name : userName, emailId : userEmail, pwd:userPwd}
        localStorage.setItem("userDetails",JSON.stringify(userDetails))
    }else{
        alert("PLEASE FILL ALL DETAILS")
    }
    window.location.href = "login.html"

    reset()

  });

  var reset = ()=>{
    document.querySelector("#Uname").value = ""
    document.querySelector("#Email").value = ""
    document.querySelector("#Pwd").value = ""
  }