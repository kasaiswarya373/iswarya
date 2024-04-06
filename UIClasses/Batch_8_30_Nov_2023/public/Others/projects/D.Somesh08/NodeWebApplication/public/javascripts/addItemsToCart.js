var addItemToCart = (productId) => {

    var prodCartData = {};
    prodCartData.productId = productId;
    prodCartData.count = 1;

    axios.post('/product/addToCart', { userAccountId: utilData.userAccountName, prodCartData })
        .then((response) => {
            utilData.showAlert(response.data.msg);
        }).catch((err) => {
            console.log('error ', err);
        })

}

var addItemsToCart = () => {
    var productQuantity = document.querySelector('#quantity');
    if (parseInt(productQuantity.textContent) >= 0) {
        var count = parseInt(productQuantity.textContent) + 1;
        productQuantity.innerText = count;
    }
}


var removeItemsFromCart = () => {
    var productQuantity = document.querySelector('#quantity');
    if (parseInt(productQuantity.textContent) >= 1) {
        var count = parseInt(productQuantity.textContent) - 1;
        productQuantity.innerText = count;
    }
}
