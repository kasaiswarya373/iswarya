var eDetails = {
  Image:
    "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
  name: "Raj",
  age: 23,
  gender: "Male",
  basicSalary: "26000",
  pfPercentage: "14",
  hraPercentage: "25",
};

var addEmployeeDetails = (eDetails) => {
  var mainLiTag = document.createElement("li");
  mainLiTag.setAttribute("class", "eDetails");

  var ulTag = document.createElement("ul");

  var imageli = document.createElement("li");
  var imgTag = document.createElement("img");
  imgTag.setAttribute("src", eDetails.Image);
  imageli.append(imgTag);
  ulTag.append(imageli);

  var li1 = document.createElement("li");
  li1.setAttribute("class", "name");
  li1.innerText = `Employee Name: ${eDetails.name}`;
  ulTag.append(li1);

  var li2 = document.createElement("li");
  li2.setAttribute("class", "age");
  li2.innerText = `Employee Age: ${eDetails.age}`;
  ulTag.append(li2);

  var li3 = document.createElement("li");
  li3.setAttribute("class", "gender");
  li3.innerText = `Employee Gender: ${eDetails.gender}`;
  ulTag.append(li3);

  var li4 = document.createElement("li");
  li4.setAttribute("class", "basicSalary");
  var basicSalary = parseFloat(eDetails.basicSalary);
  li4.innerText = `Employee Basic salary: ${eDetails.basicSalary}`;
  ulTag.append(li4);

  var li5 = document.createElement("li");
  li5.setAttribute("class", "pf");
  var pf = parseFloat(eDetails.pfPercentage);
  pf = (eDetails.basicSalary * 14) / 100;
  li5.innerText = `Employee pf: ${pf}`;
  ulTag.append(li5);

  var li6 = document.createElement("li");
  li6.setAttribute("class", "hra");
  var hra = parseFloat(eDetails.hraPercentage);
  hra = (eDetails.basicSalary * 25) / 100;
  li6.innerText = `Employee hra: ${hra}`;
  ulTag.append(li6);

  var li7 = document.createElement("li");
  li7.setAttribute("class", "total");
  var TotalSalary = parseFloat(basicSalary + pf + hra);
  var TotalTax = (TotalSalary * 15) / 100;
  li7.innerText = `Total Tax: ${TotalTax}`;
  ulTag.append(li7);

  mainLiTag.append(ulTag);

  document.querySelector(".employeeDetailsContainer").append(mainLiTag);
};
addEmployeeDetails(eDetails);
