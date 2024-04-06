
var validateUserCredentials = async () => {
    storeUserPreferences(); // Storing user data to cache.

    var userName = document.querySelector('#floatingInput');
    var userPassword = document.querySelector('#floatingPassword');

    var userCredentials = {};
    userCredentials.username = userName.value;
    userCredentials.password = userPassword.value;

    await axios.post('/get/userData', { userCredentials })
        .then((resp) => {
            var respMsgBlock = document.querySelector('.responseMessageBlock');
            console.log('resp.data::', resp.data)
            respMsgBlock.innerText = resp.data.message;
            if (resp.data.message === 'Login successFul') {
                utilData.userAccountName = userCredentials.username;
                showLoggedInUserAcDetails();
                $('#LoginPage').modal('hide');
                $("#metaContentBlock").hide();
                loadSelectedPage('loadProductDetails');
                utilData.showAlert('you are logged in');
            }
        }).catch((err) => {
            console.log('error while getting data from server')
        })
}


//show Logged in user name
var showLoggedInUserAcDetails = () => {
    document.querySelector('#headerLoginSignUp').style.display = 'none';
    document.querySelector('#Headerlogout').style.display = 'inline-block';
    document.querySelector('.accountUserNameDisplay').style.display = 'inline-block';
    document.querySelector('#accountUserName').innerHTML = `<b> ${utilData.userAccountName} </b>`;

}

//hide user details on log out
var hideLoggedInUserAcDetails = () => {
    document.querySelector('#Headerlogout').style.display = 'none';
    document.querySelector('#headerLoginSignUp').style.display = 'inline-block';
    document.querySelector('.accountUserNameDisplay').style.display = 'none';
}