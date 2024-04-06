var generateCaptcha = () => {
  var chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";
  var captchaLenght = 6;
  var captcha = "";

  for (var i = 0; i < captchaLenght; i++) {
    var randonNo = Math.floor(Math.random() * chars.length);
    captcha += chars.charAt(randonNo);
  }

  document.querySelector("#captcha").innerHTML = captcha;
};

generateCaptcha();
