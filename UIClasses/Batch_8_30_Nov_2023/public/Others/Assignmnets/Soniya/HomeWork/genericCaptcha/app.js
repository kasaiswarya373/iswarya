var setCaptcha = () =>
{
    var captchaVal = getCaptcha();
    document.querySelector(".captchaContainer").innerHTML = captchaVal;
}
setCaptcha();