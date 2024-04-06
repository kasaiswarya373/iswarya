var userDetails = () => {
  var id = document.querySelector("#Uname").value;
  localStorage.setItem("UserName", id);
  var pwd = document.querySelector("#Upwd").value;
  localStorage.setItem("UserPwd", pwd);
  console.log(id, pwd);
  resetFields();
  rememberData();
};
var resetFields = () => {
  document.querySelector("#Uname").value = "";
  document.querySelector("#Upwd").value = "";
};

var showDetails = () => {
  userDetails();
};

var rememberData = () => {
  if (document.querySelector("#remember").checked) {
    // localStorage.getItem("UserName");
    if (
      localStorage.getItem("UserName") == null &&
      localStorage.getItem("UserPwd") == null
    ) {
      showDetails(localStorage.getItem("UserName"));
      showDetails(localStorage.getItem("UserPwd"));
    }
    // if (localStorage.getItem("UserPwd") != null) {
    //   showDetails(localStorage.getItem("UserPwd"));
    // }
  } else {
    showDetails(localStorage.getItem("UserName"));
    showDetails(localStorage.getItem("UserPwd"));
  }
};
