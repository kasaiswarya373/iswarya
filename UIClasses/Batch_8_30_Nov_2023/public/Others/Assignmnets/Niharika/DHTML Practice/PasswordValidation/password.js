var changeType = () => {
    var pElemenet = document.querySelector("#upassword");
    var type = pElemenet.getAttribute('type');
    if(type == 'password'){
        pElemenet.setAttribute('type','text');
        document.querySelector("#openeye").style.display = 'none';
        document.querySelector("#closeeye").style.display = 'inline-block';
    }
    else{
        pElemenet.setAttribute("type","password");
        document.querySelector("#openeye").style.display = 'inline-block';
        document.querySelector("#closeeye").style.display = 'none';
    }
}
var isPasswordValid = {
    length: false,
    startWithUpperCase: false,
    maxOfTwoDigits: false,
    specialSymbol: false,
    symbolValidation: false
};
var images = {
    tick: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/></svg>',
    cross: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1 0-.708"/></svg>'
};
var totalcount = 0;
var validateKeyUpEvents = (event) => {
    var element = event.target;
    if(element.value.length>0){
        document.querySelector(".block").style.display = 'block'
    }
    else{
        document.querySelector(".block").style.display = 'none';
    }
    //Length validation
    if(element.value.length == 8){
        document.querySelector(".lenValidation").style.color = 'green';
        document.querySelector("#displayIcon").innerHTML = images.tick;
    }
    else{
        document.querySelector(".lenValidation").style.color = 'red';
        document.querySelector("#displayIcon").innerHTML = images.cross;
    }
    //UpperCaseValidation
    var firstCharCode = element.value.charCodeAt(0);
    if(firstCharCode>=65 && firstCharCode<=90){
        document.querySelector(".startWithUpperCase").style.color = 'green';
        document.querySelector("#displayIcon1").innerHTML = images.tick;
    }
    else{
        document.querySelector(".startWithUpperCase").style.color = 'red';
        document.querySelector("#displayIcon1").innerHTML = images.cross;
    }
    //Max 2 digits
    var count = 0;
    for(var i=0;i<element.value.length;i++){
        var numcode = element.value.charCodeAt(i);
        if(numcode>=48 && numcode <= 57){
            count++;
        }
    }
    if(count==2 || count == 1){
        document.querySelector(".maxOfTwoDigits").style.color = 'green';
        document.querySelector("#displayIcon2").innerHTML = images.tick;
    }
    else{
        document.querySelector(".maxOfTwoDigits").style.color = 'red';
        document.querySelector("#displayIcon2").innerHTML = images.cross;
    }
    // should have one special symbol
    var count1 = 0;
    var ele = element.value;
    for(var i = 0 ; i < ele.length ; i++){
        var symbolcode = ele.charCodeAt(i);
        if(symbolcode>=33 && symbolcode<=47 || symbolcode>=58 && symbolcode <= 64 || symbolcode>=91 && symbolcode<=96 || symbolcode>=121 && symbolcode<=126){
            count1++;
        }
    }
    if(count1==1){
        document.querySelector(".specialSymbol").style.color = 'green';
        document.querySelector("#displayIcon3").innerHTML = images.tick;

    }
    else{
        document.querySelector(".specialSymbol").style.color = 'red';
        document.querySelector("#displayIcon3").innerHTML = images.cross;
    }
    // should not end with special symbol
    var res = element.value
    var lastChar = res.charCodeAt(res.length - 1);
    if(lastChar>=33 && lastChar<=47 || lastChar>=58 && lastChar <= 64 || lastChar>=91 && lastChar<=96 || lastChar>=121 && lastChar<=126){
        document.querySelector(".symbolValidation").style.color = 'red';
        document.querySelector("#displayIcon4").innerHTML = images.cross;
    }
    else{
        document.querySelector(".symbolValidation").style.color = 'green';
        document.querySelector("#displayIcon4").innerHTML = images.tick;
    }
    isPasswordValid.length = (element.value.length === 8);
    isPasswordValid.startWithUpperCase = (firstCharCode >= 65 && firstCharCode <= 90);
    isPasswordValid.maxOfTwoDigits = (count === 1 || count === 2);
    isPasswordValid.specialSymbol = (count1 === 1);
    isPasswordValid.symbolValidation = !(lastChar >= 33 && lastChar <= 47 || lastChar >= 58 && lastChar <= 64 || lastChar >= 91 && lastChar <= 96 || lastChar >= 121 && lastChar <= 126);
}


   var submitData = () => {
        if (Object.values(isPasswordValid).every(condition => condition)) {
            document.querySelector(".container").style.display = 'none';
            document.querySelector(".msgblock").style.display = 'block';
        } else {
            document.querySelector(".container").style.display = 'block';
            document.querySelector(".msgblock").style.display = 'none';
        }
   }
