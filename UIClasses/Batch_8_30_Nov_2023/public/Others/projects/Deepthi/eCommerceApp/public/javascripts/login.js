var validateUserCredentials = () => {
    var userData = {};
    userData.userId = $("#userid").val();
    userData.password = $("#pswd").val();

    // GET method
    // axios.get('/validate/loginDetails',{params:userData}).then((response) => {
    //     console.log(response);
    // }).catch((error) => {
    //     console.log("error");
    // })

    // POST method
    axios.post('/validate/loginDetails', userData).then((response) => {
        console.log(response);
        console.log("response");

        if (response.data.msg == 'Valid') {
            $('#pageLoginModel').modal('hide');
            $('.categoryFilterBlock').hide();
            $('.topDealsBlock').hide();
            loadPage('productDetailsList');
        } else {
            $(".invalidBlock").show();
            $(".invalidBlock").text('Invalid Credentials,Please try again');

        }


    }).catch((error) => {
        console.log("error");
    })
}

