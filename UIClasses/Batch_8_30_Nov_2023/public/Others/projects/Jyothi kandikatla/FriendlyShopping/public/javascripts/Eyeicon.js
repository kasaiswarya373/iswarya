var changeTheType = () => {
    //code for login password
    var pwdElement = document.querySelector("#password");
    var currentType = pwdElement.getAttribute('type');
    if (currentType == 'password') {
        pwdElement.setAttribute("type", 'text');
        document.querySelector("#openeye").style.display = 'none';
        document.querySelector("#closedeye").style.display = 'inline-block';
    } else {
        pwdElement.setAttribute("type", 'password')
        document.querySelector("#openeye").style.display = 'inline-block';
        document.querySelector("#closedeye").style.display = 'none';
    }
}
    var signuppwdchangeTheType = () => {
    // code for signup password
    var signuppwd = document.querySelector("#pwd");
    var signuptype = signuppwd.getAttribute('type');
    if(signuptype == 'password'){
        signuppwd.setAttribute('type','text');
        document.querySelector("#openeyepwd").style.display = 'none';
        document.querySelector("#closedeyepwd").style.display = 'inline-block';
    }
    else{
        signuppwd.setAttribute("type", 'password')
        document.querySelector("#openeyepwd").style.display = 'inline-block';
        document.querySelector("#closedeyepwd").style.display = 'none';
    }

    }
    var confirmpwdchangeTheType = () =>{
        // code for confirm password
        var confirmpwd = document.querySelector("#confirmpwd");
        var confirmpwdtype = confirmpwd.getAttribute('type');
        if(confirmpwdtype == 'password'){
            confirmpwd.setAttribute('type','text');
            document.querySelector("#openeyecon").style.display = 'none';
            document.querySelector("#closedeyecon").style.display = 'inline-block';
        }
        else{
            confirmpwd.setAttribute("type", 'password')
            document.querySelector("#openeyecon").style.display = 'inline-block';
            document.querySelector("#closedeyecon").style.display = 'none';
        }
    }
    



