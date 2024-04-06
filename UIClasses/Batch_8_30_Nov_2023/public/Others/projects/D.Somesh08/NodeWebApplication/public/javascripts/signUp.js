var showSignUpPasword = () => {
    document.querySelector('#openEyeForPasswordInSingUp').style.display = 'none';
    document.querySelector('#closedEyeForPasswordInSignUp').style.display = 'block';

    var pass = document.querySelector('.signUpPass');
    pass.setAttribute('type', 'text');
}

var hidePasswordForSignUp = () => {
    document.querySelector('#openEyeForPasswordInSingUp').style.display = 'block';
    document.querySelector('#closedEyeForPasswordInSignUp').style.display = 'none';

    var pass = document.querySelector('.signUpPass');
    pass.setAttribute('type', 'password');
}

var showConfirmPassword = () => {
    document.querySelector('#openEyeForConfirmPassword').style.display = 'none';
    document.querySelector('#closedEyeForConfirmPassword').style.display = 'block';

    var pass = document.querySelector('.signUpConfirmPass');
    pass.setAttribute('type', 'text');
}

var hideConfirmPasswordForSignUp = () => {
    document.querySelector('#openEyeForConfirmPassword').style.display = 'block';
    document.querySelector('#closedEyeForConfirmPassword').style.display = 'none';

    var pass = document.querySelector('.signUpConfirmPass');
    pass.setAttribute('type', 'password');
}