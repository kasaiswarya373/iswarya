var loadpage = (type) => {
    var templateUrl = '';
    switch (type) {
        case 'signup':
            templateUrl = 'templates/newSignUp.htm';
            break;
        case 'home':
            $("#mainContentBlockArea").html('');;
            break;
                
    }
    axios.get(templateUrl).then((response)=>{
        // var signuphtmlContent = response.data;
        // console.log(signuphtmlContent);
        if(type == 'signup'){
            $("#mainContentBlockArea").html(response.data);
        }
    })
}