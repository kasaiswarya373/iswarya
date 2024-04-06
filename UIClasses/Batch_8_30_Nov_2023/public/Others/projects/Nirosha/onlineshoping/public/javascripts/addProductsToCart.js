

var addItemToCart = (productId) => {
    var cartData = {};
    cartData = 
        {
            productId: productId,
            count: 1
        };

    var url = '/products/addToCart';
    axios.post(url, {cartData, userAccountId: utilData.userAccountId}).then((response) => {
        console.log("Response");
        console.log(response);
        utilData.showAlert("Item Added to cart");
    })
};