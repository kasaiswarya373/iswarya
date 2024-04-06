
var sample = () => {
    console.log("frm sample")
    console.log(document.querySelector("#sampleTxtBox").value)
}

var registerUser = () => {

}

var validateKeyUpEvents = (event) => {
    var element = event.target;
    if (element.value.length > 0 ) {
        document.querySelector('.validationList').style.display = 'block';
    } else {
        document.querySelector('.validationList').style.display = 'none';
    }
    
    
    // Valiadtion for password length
    if (element.value.length == 8) {
        document.querySelector("#lenValidation").style.color = 'Green';
    } else {
        document.querySelector("#lenValidation").style.color = 'Red';
    }
    // validation for first letter to be upper case

    var charCodeOfFirstChar = element.value.charCodeAt(0);

    if (charCodeOfFirstChar >= 65 && charCodeOfFirstChar <= 90) { // Its upper case
        document.querySelector("#firstCharValidation").style.color = 'Green';
    } else {
        document.querySelector("#firstCharValidation").style.color = 'Red';
    }
    
    
}


var validateKeyPressEvents = (event) => {
    var element = event.target;
    
}
var changeTheType = () => {
    var pwdElement = document.querySelector("#userPassword");
    var currentType = pwdElement.getAttribute('type');
    if (currentType == 'password') {
        pwdElement.setAttribute("type", 'text');
        document.querySelector("#openEye").style.display = 'none';
        document.querySelector("#closedEye").style.display = 'inline-block';
    } else {
        pwdElement.setAttribute("type", 'password')
        document.querySelector("#openEye").style.display = 'inline-block';
        document.querySelector("#closedEye").style.display = 'none';
    }
}

