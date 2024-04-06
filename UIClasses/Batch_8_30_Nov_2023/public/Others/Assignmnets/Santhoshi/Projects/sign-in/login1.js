
    var getcaptcha = () => {
        var captchavalue =  randomUpperCase() + randomLowerCase() + randomNumber() + randomLowerCase() + randomNumber() +  randomUpperCase();
        document.getElementById('box').innerHTML = captchavalue;
        console.log(captchavalue)

    }

    var randomLowerCase = () => {
        var minlower = 97;
        var maxlower = 122;
        var randomlower = Math.floor((Math.random() * 25) + minlower);
        var lowercase = String.fromCharCode(randomlower);
        return (lowercase);
    }

    var randomUpperCase = () => {
        var minupper = 65;
        var maxupper = 90;
        var randomupper = Math.floor((Math.random() * 25) + minupper);
        var uppercase = String.fromCharCode(randomupper);   // converts ascii code digit into character
       // console.log(uppercase)
        return (uppercase);
    }

    var randomNumber = () => {
        var num = 10;
        var number = Math.floor(Math.random() * num);
       // console.log(number);
        return (number);
        
    }
    getcaptcha();
   