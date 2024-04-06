
var showCartItems = async () => {
    $(".productDetailsContainer").hide();
    $('#carouselExampleAutoplaying').hide();
    $('#categoryFilterBlock').hide();

    var singleCartProductTemplate;

    axios.get('templates/cartItemsData.htm').then((response) => {
        singleCartProductTemplate = Handlebars.compile(response.data);
    });

    await axios.get('/get/cartItems/')
        .then((resp) => {
            console.log('resp.data  :', resp.data);
            var mainContentBlockArea = document.querySelector('#mainContentBlockArea');
            mainContentBlockArea.insertAdjacentHTML('beforeend', singleCartProductTemplate({ productDetails: resp.data }));
        }).catch((err) => {
            console.log('error at client side, while getting cart items ', err);
        })
}