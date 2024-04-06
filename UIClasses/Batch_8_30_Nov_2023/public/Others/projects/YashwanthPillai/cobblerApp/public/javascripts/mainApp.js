var storeLoginData = () => {
  var loginData = {};
  loginData.userName = $("#u_Email").val();
  loginData.userPass = $("#u_pwd").val();
  console.log(loginData);

//   axios .get("/validate/loginData", { params: loginData }).then((response) => {
//       console.log("SUCCESS");
//     })
//     .catch((error) => {
//       console.log("ERROR");
//     });
    axios .post("/validate/loginData", loginData).then((response) => {
        console.log("SUCCESS");
        if(response.data.msg == "Valid"){
            $("#loginModal").modal('hide');
        }else{
            $(".invalidMsgBlock").show()
            $(".invalidMsgBlock").text("Invalid Credentials, Please try again!")
        }
      })
      .catch((error) => {
        console.log("ERROR");
      });
};
