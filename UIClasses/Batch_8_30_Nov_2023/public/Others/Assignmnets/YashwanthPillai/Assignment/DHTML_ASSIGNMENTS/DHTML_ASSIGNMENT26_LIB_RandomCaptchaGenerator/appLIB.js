// var randomNumber = () =>{
//     var randomValue = Math.floor(Math.random() * 10 )
//     return randomValue
// }

// var upperCaseChar = () =>{
//     var maxRange = 90
//     var minRange = 65
//     var upperCase = Math.floor(Math.random() * (maxRange - minRange) + minRange )
//     return String.fromCharCode(upperCase)

// }
// var lowerCaseChar = () =>{
//     var maxRange = 122
//     var minRange = 97
//     var lowerCase = Math.floor(Math.random() * (maxRange - minRange) + minRange )
//     return String.fromCharCode(lowerCase)

// }



var randomPattern = () =>{
    var pattern ="";
    var possiblePatterns  = ["L","U","N"];
    var sizeofCaptcha = document.querySelector("#SIZE").value

    for(var i=1; i <= sizeofCaptcha; i++ ){
        var randomIndex = Math.floor(Math.random() * 3);
        pattern = pattern + possiblePatterns[randomIndex]
    }
    return pattern
}

var getCaptcha = (customPattern) => {
    var captchaPattern;
    if(customPattern){
        captchaPattern = customPattern
    }else{
        // captchaPattern = "ULNLU"
        captchaPattern = randomPattern()
    }
//   var captchaPattern = 'ULNLU';
  var captcha = '';
  captchaPattern = captchaPattern.split('');

  for (var i = 0; i < captchaPattern.length; i++) {
    captcha = captcha + randomNumberOrChar(captchaPattern[i]);
  }
  return captcha;
};

var randomNumberOrChar = (type) => {
  var minRange, maxRange;
  var randomChar;
  type = type.trim();
  type = type.toLowerCase();

  switch (type) {
    case "n":
      return Math.floor(Math.random() * 10);
      break;
    case "u":
      minRange = 65;
      maxRange = 90;
      break;
    case "l":
      minRange = 97;
      maxRange = 122;
      break;
  }

  var randomChar = Math.floor(Math.random() * (maxRange - minRange) + minRange);
  return String.fromCharCode(randomChar);
};
// console.log(randomNumberOrChar("n"));
// console.log(randomNumberOrChar("u"));
// console.log(randomNumberOrChar("l"));


