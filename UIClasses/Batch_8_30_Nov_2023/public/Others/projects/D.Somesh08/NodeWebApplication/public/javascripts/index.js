var categoryImages = [
    { imgUrl: 'images/HomeSliderImgs/sliderImg_3.webp' },
    { imgUrl: 'images/HomeSliderImgs/sliderImg_4.webp' },
    { imgUrl: 'images/HomeSliderImgs/sliderImg_2.webp' }
];

var categoryFilterBlockImgs = [
    { imgUrl: './images/CategoryImgs/cat_1.webp' },
    { imgUrl: './images/CategoryImgs/cat_2.webp' },
    { imgUrl: './images/CategoryImgs/cat_3.webp' }
];

var showPassword = () => {
    var closedEye = document.querySelector('#closedEye');
    closedEye.style.display = 'inline';
    var openEye = document.querySelector('#openEye');
    openEye.style.display = 'none';
    var passwordType = document.querySelector('#floatingPassword');
    passwordType.setAttribute('type', 'text');
}

var hidePassword = () => {
    var openEye = document.querySelector('#openEye');
    openEye.style.display = 'inline';
    document.querySelector('#closedEye').style.display = 'none';
    var passwordType = document.querySelector('#floatingPassword');
    passwordType.setAttribute('type', 'password');
}

var storeUserPreferences = () => {
    var rememberMe = document.querySelector('#flexCheckChecked');
    if (rememberMe.checked) {
        var userName = document.querySelector('#floatingInput');
        localStorage.setItem('userName', userName.value);

        var password = document.querySelector('#floatingPassword');
        localStorage.setItem('password', password.value);
    } else {
        localStorage.setItem('userName', '');
        localStorage.setItem('password', '');
    }
}

var setUserPreferences = () => {
    if (localStorage.getItem('userName') != null) {
        var userName = document.querySelector('#floatingInput');
        userName.value = localStorage.getItem('userName');
    }
    if (localStorage.getItem('password') != null) {
        var password = document.querySelector('#floatingPassword');
        password.value = localStorage.getItem('password');
    }
}

// Sign-Up related methods
var loadSelectedPage = (type) => {
    var templateUrl = '';
    console.log(location);
    location.hash = type;
    if (type === 'llllllogin') {
        return;
    }
    switch (type) {
        case 'signUp':
            templateUrl = '/Templates/SignUp.htm';
            var el = document.querySelector('#headerSignUpBtn');
            el.setAttribute('class', 'd-none');
            // document.querySelector('#headerSignUpBtn').style.display='none';
            document.querySelector('#metaContentBlock').style.display = 'none';
            document.querySelector('#SignUpPageTemplate').style.display = 'block';
            break;

        case 'home':
            document.querySelector('#headerSignUpBtn').style.display = 'inline';
            var signUpPageTemp = document.querySelector('#SignUpPageTemplate');
            document.querySelector('.productDetailsOfASpecificProduct').innerHTML = "";
            signUpPageTemp.innerHTML = '';
            signUpPageTemp.style.display = 'none';

            document.querySelector('#metaContentBlock').style.display = 'block';
            break;

        case 'loadProductDetails':
            templateUrl = '/Templates/ProductDetails.htm';
            break;

        case 'loadProductDetailsWithId':
            //when we click on a product it's complete details v'll be shown a different page.
            templateUrl = '/Templates/descriptiveProductDetailsPage.htm';
            break;

        case 'viewCart':
            showCartItems();
            return;
    }
    if (templateUrl != '') {
        axios.get(templateUrl)
            .then((response) => {
                if (type == 'signUp') {
                    var signUpPageBlock = document.querySelector('#SignUpPageTemplate');
                    signUpPageBlock.insertAdjacentHTML('afterbegin', response.data);
                }
                else if (type == 'loadProductDetails') {
                    document.querySelector('#metaContentBlock').style.display = 'none';
                    var mainBlock = document.querySelector('.productDetailsTemp');
                    mainBlock.insertAdjacentHTML('afterend', response.data);
                    loadSingleProductDetailsTemplate();
                }
                else if (type == 'loadProductDetailsWithId') {
                    $('#metaContentBlock').hide();
                    renderProductDetails(response.data);
                }
            }).catch(err => console.log("error : ", err));
    }
}

var logOutUser = () => {
    axios.get('/user/logOut')
        .then((response) => {
            console.log(response.data);
            loadSelectedPage('home');
            hideLoggedInUserAcDetails();
            utilData.showAlert('you are logged out');
        }).catch(err => console.log("error while logging out ", err));
}