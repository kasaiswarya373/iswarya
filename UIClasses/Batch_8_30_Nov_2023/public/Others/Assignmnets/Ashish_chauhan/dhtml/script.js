var eDetail = [
  {
    name: "Ashish",
    age: 28,
    gender: "Male",
    pf: "14",
    hra: "20",
    salary: 50000,
    imgUrl:
      "https://thebhavinshah.com/wp-content/uploads/2016/09/For-Employees.jpg",
  },
  {
    name: "Raj",
    age: 24,
    gender: "Male",
    pf: "14",
    hra: "20",
    salary: 72000,
    imgUrl:
      "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg",
  },
  {
    name: "Teena",
    age: 30,
    gender: "Female",
    pf: "14",
    hra: "20",
    salary: 120000,
    imgUrl:
      "https://reproductionsinc.com/wp-content/uploads/2019/11/AdobeStock_258949460.jpeg",
  },
  {
    name: "Krish",
    age: 26,
    gender: "Male",
    pf: "14",
    hra: "20",
    salary: 65000,
    imgUrl:
      "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-846.jpg",
  },
];

var addEmpDetails = (employeeDetail) => {
  var mailUlTag = document.createElement("ul");
  mailUlTag.setAttribute("class", "mainULTag");
  mailUlTag.style.border = "1px solid black";
  var imageli = document.createElement("li");
  var imgTag = document.createElement("img");
  imgTag.setAttribute("src", employeeDetail.imgUrl);
  imageli.append(imgTag);
  mailUlTag.append(imageli);

  var li1 = document.createElement("li");
  li1.innerText = `Name : ${employeeDetail.name}`;
  mailUlTag.append(li1);

  var li2 = document.createElement("li");
  li2.innerText = `Age : ${employeeDetail.age}`;
  mailUlTag.append(li2);

  var li3 = document.createElement("li");
  li3.innerText = `Gender : ${employeeDetail.gender}`;
  mailUlTag.append(li3);

  var li4 = document.createElement("li");
  var pfRate = parseFloat((employeeDetail.salary * employeeDetail.pf) / 100);
  li4.innerText = `PF : ${pfRate}`;
  mailUlTag.append(li4);

  var li5 = document.createElement("li");
  var hraRate = parseFloat((employeeDetail.salary * employeeDetail.hra) / 100);
  li5.innerText = `HRA : ${hraRate}`;
  mailUlTag.append(li5);

  var li6 = document.createElement("li");
  li6.innerText = `Salary : ${employeeDetail.salary}`;
  mailUlTag.append(li6);
  console.log(mailUlTag);

  document.querySelector(".container").append(mailUlTag);
};
for (var i = 0; i < eDetail.length; i++) {
  addEmpDetails(eDetail[i]);
}
