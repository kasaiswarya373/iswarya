var ValidateUserCredentials = () => {
    UserCheckinData(); 
    var userData = {};
    userData.accountId = $("#UserAccountId").val();
    userData.accountpassword = $("#accountpassword").val();

   // axios.get('/validate/userlogin', {params : userData}).then(response => { // here params :: is when we do with get communication

    axios.post('/validate/userlogin', userData).then(response => { // here data :: is when we do with post communication
        console.log("success");
    
        if (response.data.msg == 'Valid') {
            // $('#staticBackdrop').modal('hide');
             $('#MetaContentBlock').hide();

             $("#exampleModal").modal('hide');
           SelectedloadPage("productDetails");

          /*  $(".modal-backdrop").hide();
            document.querySelector("body").setAttribute("style", ''); */

            $("#staticBackdrop").removeClass("in");
            $(".modal-backdrop").remove();
            $("#staticBackdrop").hide();
            setTimeout(() => {
              $("body").removeAttr('style')
            }, 100);
            
        } else {
            $(".invalidMsgBlock").show();
            $(".invalidMsgBlock").text("Invalid Credentials, Please try again");
        }
    }).catch(() => {
        console.log("Error");
    })
    console.log(userData);
}