var generateCaptcha = () => {
  var chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";
  var captchaLenght = 10;
  var captcha = "";

  for (var i = 0; i < captchaLenght; i++) {
    var randomNo = Math.floor(Math.random() * chars.length);
    captcha += chars.charAt(randomNo);
  }

  document.querySelector("#captcha").innerHTML = captcha;
};

generateCaptcha();