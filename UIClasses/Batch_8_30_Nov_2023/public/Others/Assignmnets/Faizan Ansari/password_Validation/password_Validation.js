var changeType = () => {

    // console.log(document.querySelector("#userPassword").getAttribute('type'));

    var pwdElement = document.querySelector("#userPassword");
    var currentType = pwdElement.getAttribute('type');

    if(currentType == 'password'){
        pwdElement.setAttribute('type','Text');
        document.querySelector("#openEye").style.display = 'inline-block';
        document.querySelector("#closedEye").style.display = 'none';
    }else{
        pwdElement.setAttribute('type','password');
        document.querySelector("#openEye").style.display = 'none';
        document.querySelector("#closedEye").style.display = 'inline-block';
    }
}

var validate_KeyPressEvent = (event) => {
    
}

var validate_KeyUpEvent = (event) => {
    var element = event.target;
        // console.log(element);

     // *) Visiblility validation
     if (element.value.length > 0 ){
        document.querySelector(".validationList").style.display = "block";
    } else {
        document.querySelector(".validationList").style.display = "none";
    }
    
    // 1) Password Length Validation, max 10 chars 
    if(element.value.length == 10) {
        document.querySelector('#lenValidation').style.color = 'Green';
    }else {
        
        document.querySelector('#lenValidation').style.color = 'Red';
    }

    // 2) First letter to be upper case validation 
    var charCodeOf_FirstChar = element.value.charCodeAt(0)   // returns ascii code of first char  
        // console.log(charCodeOf_FirstChar);
    if (charCodeOf_FirstChar >= 65 && charCodeOf_FirstChar <= 90) {   // means uppercase
        document.querySelector("#firstCharValidation").style.color = 'Green';
    }else {
        document.querySelector("#firstCharValidation").style.color = 'Red';
    }

   // 3) Digits Validation, min 1 or max 2 digits

   var count = 0;
   for (var i = 0; i < 10; i++) { // loop to get all 10 chars
        // console.log(element.value.charCodeAt(i));
        if (element.value.charCodeAt(i) >= 48 && element.value.charCodeAt(i) <= 57){
            // console.log(element.value.charCodeAt(i));
            count ++;
        }
   } 
        // console.log(count);

   if(count <= 2 && count!= 0){
    // console.log(count);
    document.querySelector("#digitValidation").style.color = 'Green';
   }else{
    document.querySelector("#digitValidation").style.color = 'Red';
   }

   // 4) Special Symbol Validation, only one special symbol

    var count2 = 0;
    for (var j = 0; j < 10; j++) { // loop to get all 10 chars
            if ((element.value.charCodeAt(j) >= 33 && element.value.charCodeAt(j) <= 47) || (element.value.charCodeAt(j) >= 58 && element.value.charCodeAt(j) <= 64)){
                count2 ++;
            }
    } 

    if(count2 == 1){
        document.querySelector("#specialCharValidation").style.color = 'Green';
    }else{
        document.querySelector("#specialCharValidation").style.color = 'Red';
    }

    // 5) Not ending with special symbol validation

    var charCodeOf_LastChar = element.value.charCodeAt(9)   // returns ascii code of last char  

    if((charCodeOf_LastChar >= 33 && charCodeOf_LastChar <= 47) || (charCodeOf_LastChar >= 58 && charCodeOf_LastChar <= 64)) {
        document.querySelector("#lastCharValidation").style.color = 'Red';
    }else{
        document.querySelector("#lastCharValidation").style.color = 'Green';
    }

}




