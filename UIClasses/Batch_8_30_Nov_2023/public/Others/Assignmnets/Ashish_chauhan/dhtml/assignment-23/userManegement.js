var form = document.querySelector("form");

function onAddData(e) {
  e.preventDefault();
  //   alert("this work");

  var name = document.querySelector("ename");
  var age = document.querySelector("age").value;
  var gender = document.querySelector("input[name=gender]:checked").value;

  var country = document.querySelector("country").value;

  alert(name + age + gender + country);
}

form.addEventListener("submit", onAddData);
