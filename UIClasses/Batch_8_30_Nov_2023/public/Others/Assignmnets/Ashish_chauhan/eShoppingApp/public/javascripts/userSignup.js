var userDetails = {};

var getUserSignup = () => {
  userDetails.accountId = $("#accountId").val();
  userDetails.password = $("#password").val();
  userDetails.userMailid = $("#userMailid").val();

  axios
    .post("/signup/newuser", userDetails)
    .then((response) => {
      console.log("response");
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
