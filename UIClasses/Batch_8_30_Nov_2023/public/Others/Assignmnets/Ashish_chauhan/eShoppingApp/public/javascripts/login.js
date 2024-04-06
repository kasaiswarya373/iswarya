var userLoginCredentaisl = () => {
  storeUserCredentials();
  var userData = {};
  userData.accountId = $("#userAccountId").val();
  userData.password = $("#accountPwd").val();

  //   axios
  //     .get("/validate/userLogin", { params: userData })
  //     .then((response) => {
  //       console.log("success");
  //     })
  //     .catch(() => {
  //       console.log("error");
  //     });

  axios
    .post("/validate/userLogin", userData)
    .then((response) => {
      console.log("success");
      if (response.data.msg == "Valid") {
        $("#pageLoginModel").modal("hide");
        $(".metaCOntentBlock, .topDealIsBlock").hide();
        loadSelectPage("productDetails");
      } else {
        $(".invalidMsgBlock").show();
        $(".invalidMsgBlock").text("Invalid Credentials, please try again");
      }
    })
    .catch(() => {
      console.log("error");
    });

  console.log(userData);
};
