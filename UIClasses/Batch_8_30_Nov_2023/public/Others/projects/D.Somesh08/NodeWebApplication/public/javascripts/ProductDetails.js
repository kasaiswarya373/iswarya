var productData = {
    "details": [
        {
            "pId": 1,
            "name": "Laptop",
            "actualPrice": 30000,
            "discountedPrice": 12000,
            "manu": "Dell",
            "sellerName": "Abc Elec",
            "rating": 4.5,
            "imageUrl":
                "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            "pId": 2,
            "name": "TV",
            "actualPrice": 32000,
            "discountedPrice": 15000,
            "manu": "Sony",
            "sellerName": "Abc Elec",
            "rating": 3.5,
            "imageUrl":
                "https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_1100,f_auto,q_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/b3460ec0-6a8a-11ea-9a43-8a541dae4315.jpg"
        },
        {
            "pId": 3,
            "name": "Mobile",
            "actualPrice": 45000,
            "discountedPrice": 25000,
            "manu": "Apple",
            "sellerName": "Indian Elec",
            "rating": 5,
            "imageUrl":
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ycwAVbGQmB6zlAugD6gh9YIMSJeUMPZFSg&usqp=CAU"
        },
        {
            "pId": 4,
            "name": "Hardisk",
            "actualPrice": 1000,
            "discountedPrice": 700,
            "manu": "Sacndisk",
            "sellerName": "Test Elec",
            "rating": 2.5,
            "imageUrl":
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQiLHrDqRrJ_THVYv9UqOiwdVjo0G8o6IVLw&usqp=CAU"
        }
    ]
}

async function loadSingleProductDetailsTemplate() {
    await axios.get('Templates/SignleProductTemplate.htm')
        .then((response) => {
            combineTemplateWithProductData(response.data);
        }).catch((err) => {
            console.log('error while getting single product details page!!');
        });
}

var getProductDetailsFromServer = async () => {
    await axios.get('/get/productDetails')
        .then((resp) => {
            return resp.data;
        }).catch((err) => {
            console.log('error : ', err);
        });
}

var getProductDetailsFromServerandDb = async () => {
    try {
        const response = await axios.get('/get/productDetailsFromDb', { params: {} });
        return response.data;
    } catch (err) {
        console.log("error while getting product details from db.");
        throw err; // Rethrow the error to be caught by the caller if needed
    }
}

var getCartItemsCount = async (userAccountId) => {
    await axios.get('/cartItems/count', { params: { userAccountId } }).then((response) => {
        var countOfCartItems = response.data;
        var cartCountBlock = document.querySelector('#cartItemsCount');
        cartCountBlock.innerHTML = `<b> ${countOfCartItems['count']} </b>`;
    }).catch((err) => console.log("error while setting cartItems count to bag : ", err));
}

var combineTemplateWithProductData = async (singleProductTemplate) => {

    var allProductsDetailsFromDb = await getProductDetailsFromServerandDb();

    await getCartItemsCount(utilData.userAccountName);
    var compile = Handlebars.compile(singleProductTemplate);

    allProductsDetailsFromDb.forEach((product, index) => {
        var rightSideProductsBlock = document.querySelector('#rightBlockProducts');
        rightSideProductsBlock.insertAdjacentHTML('afterbegin', compile(product));
    });
}

async function renderProductDetails(descriptiveProdTemplate) {
    descriptiveProdTemplate = Handlebars.compile(descriptiveProdTemplate);

    await axios.get('/get/productDetailsFromDb', { params: { pid: productId } })
        .then((resp) => {
            var selectedProductData = resp.data[0];
            var productDetailsBlock = document.querySelector('.productDetailsOfASpecificProduct');
            productDetailsBlock.insertAdjacentHTML('afterbegin', descriptiveProdTemplate(selectedProductData));
        }).catch((err) => {
            console.log('error : ', err);
        });
};

var showSelectedImage = (imageUrl) => {
    var backgroundImage = "url('" + imageUrl + "')";
    $(".mainImage").css("background-image", backgroundImage);
}