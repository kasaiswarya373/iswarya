var registerUser = () => {

}

var validateKeyUpEvents = (event) => {
    // console.log(event);
    var element = event.target;
    // console.log(element.value.length);
    //Validation for password length
    if(element.value.length == 8){
        document.querySelector('#lenValidation').style.color ='Green';
    } else {
        document.querySelector('#lenValidation').style.color ='Red';
    }

    //Validation for first Upper case
    var firstchar = element.value[0];
    var charCodeOfFirstChar = element.value.charCodeAt(0);

    if (charCodeOfFirstChar >= 65 && charCodeOfFirstChar <= 90) {           //Its upper case
        document.querySelector('#firstCharValidation').style.color = 'Green';
    } else {
        document.querySelector('#firstCharValidation').style.color = 'Red';
    }
    console.log(element.value[0]);
}

var validateKeyPressEvents = (event) => {
    // var element = event.target;
    // console.log(element.value.length);
}

var changeTheType = () => {
    var pwdElemet = document.querySelector('#userPassword');
    var currentType = pwdElemet.getAttribute('type');

    if(currentType == 'password'){
        pwdElemet.setAttribute('type', 'text');
        document.querySelector('#openEye').style.display = 'none';
        document.querySelector('#closedEye').style.display = 'inline-block';
    } else {
        pwdElemet.setAttribute('type', 'password');
        document.querySelector('#openEye').style.display = 'inline-block';
        document.querySelector('#closedEye').style.display = 'none';
    }
}
