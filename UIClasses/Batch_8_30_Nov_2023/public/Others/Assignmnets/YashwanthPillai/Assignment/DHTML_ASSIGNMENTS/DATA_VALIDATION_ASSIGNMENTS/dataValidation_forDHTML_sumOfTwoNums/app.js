var getSum = () => {
  var a = document.querySelector("#Fval").value;
  a = a.trim();
  if (a == "") {
    document.querySelector("#num1").style.display = "block";
    return;
  } else {
    document.querySelector("#num1").style.display = "none";
  }
  a = parseInt(a);

  var b = document.querySelector("#Sval").value;
  b = b.trim();

  if (b == "") {
    document.querySelector("#num2").style.display = "block";
    return;
  } else {
    document.querySelector("#num2").style.display = "none";
  }
  b = parseInt(b);

  var result = a + b;
  document.querySelector("#result").innerHTML = result;
  resetFields();
  document.querySelector(".summ").style.display = "block";
};

var resetFields = () => {
  document.querySelector("#Fval").value = "";
  document.querySelector("#Sval").value = "";
};

var validateData = (event) => {
  var a = document.querySelector("#Fval").value;
  if (event.keyCode >= 48 && event.keyCode <= 57) {
    return true;
  } else {
    return false;
  }
  var b = document.querySelector("#Sval").value;
  if (event.keyCode >= 48 && event.keyCode <= 57) {
    return true;
  } else {
    return false;
  }
};
getSum();
