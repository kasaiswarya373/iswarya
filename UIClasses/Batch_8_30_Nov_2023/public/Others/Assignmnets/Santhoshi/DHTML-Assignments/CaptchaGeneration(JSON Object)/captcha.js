     var captcha = {

    randomuppercase(){
        captcha.minupper= 65;
        captcha.maxupper = 90;
        captcha.randomupper = (Math.floor(Math.random() * 25) + minupper);
        captcha.uppercase = String.fromCharCode(randomupper);
       
    },

    randomlowercase () {
        captcha.minlower = 97;
        captcha.maxlower = 122;
        captcha.randomlower = (Math.floor(Math.random() * 25) + captcha.minlower);
        captcha.lowercase = String.fromCharCode(randomlower);
    },

    randomNumber () {
        captcha.maxvalue = 10;
        captcha.num = (Math.floor(Math.round() * captcha.maxvalue));
    },
    
    getcaptcha () {
        captcha.generationrandomcaptcha =  captcha.uppercase + captcha.num +  captcha.lowercase + captcha.uppercase + captcha.lowercase;
    
       
    },

    displayinfo(){
        captcha.randomuppercase();
        captcha.randomlowercase();
        captcha.randomNumber();
        captcha.getcaptcha();
        document.querySelector("#box").innerText =  captcha.generationrandomcaptcha;
               
        console.log( captcha.generationrandomcaptcha);
    }
}



