$("#login").on("click",function (){

    
    let userName = $("#Uname").val()
    
    let userPwd = $("#Pwd").val()


    if(userName && userPwd){

        let localStorageData = localStorage.getItem("userDetails")
        if(localStorageData){
            localStorageData = JSON.parse(localStorageData)
        
        if(userName = localStorageData.name && userPwd===localStorageData.pwd){
            window.location.href = "home.html"
        }
        else{

            alert("Invalid Details ....... Try Again")
        }
    }else{
        alert("PLEASE SIGNUP FIRST THEN LOGIN")
        window.location.href = "index.html"
    }
        
    }else{
        alert("PLEASE ENTER THE DETAILS")
    }
})