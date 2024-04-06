//To check the input type - text or password

var changeTheType = () => {

    var pwdElement = document.querySelector("#userPassword")
    var currentType = pwdElement.getAttribute('type');
    if (currentType == 'password') {
        pwdElement.setAttribute("type", 'text');
        document.querySelector("#openEye").style.display = 'inline-block';
        document.querySelector("#closedEye").style.display = 'none';
    } else {
        pwdElement.setAttribute("type", 'password');
        document.querySelector("#openEye").style.display = 'none';
        document.querySelector("#closedEye").style.display = 'inline-block';
    }
}

var changeThePasswordType = () => {

    var resetPwdElement = document.querySelector("#rUserPassword")
    var currentType = resetPwdElement.getAttribute('type');
    if (currentType == 'password') {
        resetPwdElement.setAttribute("type", 'text');
        document.querySelector("#openEye").style.display = 'inline-block';
        document.querySelector("#closedEye").style.display = 'none';
    } else {
        resetPwdElement.setAttribute("type", 'password');
        document.querySelector("#openEye").style.display = 'none';
        document.querySelector("#closedEye").style.display = 'inline-block';
    }
}


var validateKeyUp = (event) => {
    var element = event.target;
    if(element.value.length > 0){
        document.querySelector(".block").style.display = 'block';
    }else{
        document.querySelector(".block").Style.display = 'none';
    }
       
    //First Validation - length - 8

    if(element.value.length == 8){
        document.querySelector("#firstValidation").style.color = 'green'; 
    }else{
        document.querySelector("#firstValidation").style.color = 'red';
    }

    //Second Validation - first letter should be upper case letter

    var firstCharacter = element.value.charCodeAt(0);

    if(firstCharacter >= 65 && firstCharacter <= 90){
        document.querySelector("#secondValidation").style.color = 'green';
    } else{
        document.querySelector("#secondValidation").style.color = 'red';
    }

    //Third Validation - min 1 digit and max 2 digits

    var count = 0;
    for(var i = 0; i < element.value.length ; i++){
        var digit = element.value.charCodeAt(i);
        if(digit >= 48 && digit <= 57){
            count++;
        }
    }
    if(count == 1 || count == 2){
        document.querySelector("#thirdValidation").style.color = 'green';
    }else{
        document.querySelector("#thirdValidation").style.color = 'red';
    }
     
    //Fourth Validation - one special symbol

    var specialSymbolInc = 0;
    for(var i = 0; i < element.value.length ; i++){
        var specialSymbol = element.value.charCodeAt(i);
            if((specialSymbol >= 33 && specialSymbol <= 47) || (specialSymbol >= 58 && specialSymbol <= 64) || 
        (specialSymbol >= 91 && specialSymbol <= 96) || (specialSymbol >= 123 && specialSymbol <= 128)){
            specialSymbolInc++;
       }
    }
    if(specialSymbolInc == 1){
        document.querySelector("#fourthValidation").style.color = 'green';
    }else{
        document.querySelector("#fourthValidation").style.color = 'red';
    }

    //fifth Validation - last character shoukd not end with special symbol.
    var last = element.value;
    var lastCharacter =  last.charCodeAt(last.length - 1);
    if((lastCharacter >= 33 && lastCharacter <= 47) || (lastCharacter >= 58 && lastCharacter <= 64) || (lastCharacter >= 91 && lastCharacter <= 96 ) || (lastCharacter >= 123 && lastCharacter <= 128)){
        document.querySelector("#fifthValidation").style.color = 'red';
    }else{
        document.querySelector("#fifthValidation").style.color = 'green';
    }
}

var registerData = () => {
    alert("Registered");
}


