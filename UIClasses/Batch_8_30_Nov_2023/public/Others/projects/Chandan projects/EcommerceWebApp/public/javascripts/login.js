var validateUserCredentials = () => {
    storeUserCredentials();
    var userData = {};
    userData.accountId = $("#UserAccountId").val();
    userData.password = $("#Accountpassword").val();

    axios.get('/Validate/userLogin',{params: userData}).then(response => {
      console.log("success");
    }).catch(() => {
    console.log("error");
    })
    console.log(userData)
}

  