var productId = '';
document.addEventListener('DOMContentLoaded', () => {
    //Category carousel images dynamci creation.
    var categoryTemp = document.querySelector('#categoryTemplate').innerHTML;
    var temp = Handlebars.compile(categoryTemp);
    var mainCarousel = document.querySelector('.carousel-inner');

    categoryImages.forEach((item, index) => {
        var activeState = index === 0 ? 'active' : '';
        item.active = activeState;
        mainCarousel.insertAdjacentHTML("beforeend", temp(item));
    });

    // Category filter block images dynamic template creation
    var categoryFilterBlockTemp = document.querySelector('#categoryFilterBlockTemplate').innerHTML;
    var catFilTemp = Handlebars.compile(categoryFilterBlockTemp);
    var catImgCols = document.querySelector('#categoryImgColumns');
    categoryFilterBlockImgs.forEach((item1, index1) => {
        catImgCols.insertAdjacentHTML('beforeend', catFilTemp(item1));
    });

    document.querySelector('#headerloginbutton').addEventListener('click', () => {
        loadSelectedPage('llllllogin');
    });

    console.log('location contains URL related info. like query params, host, protocal etc info');
    console.log(location);

    const queryParams = new URLSearchParams(location.search);

    axios.get('/check/userValid', { params: {} }).then((response) => {
        console.log("login check: ",response.data.isLoggedInUser)
        if (response.data.isLoggedInUser) {
            utilData.userAccountName = response.data.accountId;
            showLoggedInUserAcDetails();

            var pageType = location.hash;

            switch (pageType) {
                case '#loadProductDetails':
                    document.querySelector('#metaContentBlock').style.display = 'none';
                    loadSelectedPage('loadProductDetails')
                    break;
            }

            //gets the query params from URL.
            if (queryParams.get('productId')) {
                productId = queryParams.get('productId');
                loadSelectedPage('loadProductDetailsWithId');
            }
        }
    }).catch((err) => {
        console.log("error while checking whether user is logged-in or not", err);
    })
});