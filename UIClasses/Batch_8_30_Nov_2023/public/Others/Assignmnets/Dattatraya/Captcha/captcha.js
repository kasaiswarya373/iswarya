var generateCaptcha = () => {
  var chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
  var captchaLength = 5;
  var captcha = "";

  for (var i = 0; i < captchaLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    captcha += chars.charAt(randomNumber);
  }
  $("#captcha").html(captcha);
};

generateCaptcha;
