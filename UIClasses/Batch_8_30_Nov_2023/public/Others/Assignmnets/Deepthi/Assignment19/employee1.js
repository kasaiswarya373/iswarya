var eDetails = {
    name : "Krish",
    age : 23,
    gender : "Male",
    Department : "IT",
    BasicSalary : 100000,
    pfPercent : 14,
    hraPercent : 25,
    totalSalary : 139000,
    imageUrl : "../Assignment19/abc1.jpg"
};

var readEmployeeDetails = (eDetails) => {

    var pf = (eDetails.BasicSalary * eDetails.pfPercent)/100;
    var hra = (eDetails.BasicSalary * eDetails.hraPercent)/100;

    var mainLiTag = document.createElement("li");
    mainLiTag.setAttribute("class","employeeDetails");

    var ulTag = document.createElement("ul");

    var liTag1 = document.createElement("li");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", eDetails.imageUrl); 
    liTag1.append(imgTag);
    ulTag.append(liTag1);

    var liTag2 = document.createElement("li");
    liTag2.innerText = "Employee Name : " +eDetails.name;
    ulTag.append(liTag2);

    var liTag3 = document.createElement("li");
    liTag3.innerText = "Age : " +eDetails.age;
    ulTag.append(liTag3);

    var liTag4 = document.createElement("li");
    liTag4.innerText = "Gender : " +eDetails.gender;
    ulTag.append(liTag4);

    var liTag5 = document.createElement("li");
    liTag5.innerText = "Department : " +eDetails.Department;
    ulTag.append(liTag5);

    var liTag6 = document.createElement("li");
    liTag6.innerText = "Basic Salary : " +eDetails.BasicSalary;
    ulTag.append(liTag6);

    var liTag7 = document.createElement("li");
    liTag7.innerText = "Pf : " +pf;
    ulTag.append(liTag7);

    var liTag8 = document.createElement("li");
    liTag8.innerText = "Hra : " +hra;
    ulTag.append(liTag8);

    var liTag9 = document.createElement("li");
    liTag9.innerText = "Total Salary : " +(eDetails.BasicSalary + pf + hra);
    ulTag.append(liTag9);

    mainLiTag.append(ulTag);
    console.log(mainLiTag);

    document.querySelector(".employeeDetailsContainer").append(mainLiTag);

}

readEmployeeDetails(eDetails);

// <!-- <li class = "employeeDetails">
//             <ul>
//                 <li>
//                     <img src = "../DHTML/abc1.jpg";>
//                 </li>
//                 <li> Employee Name: Krish </li>
//                 <li> Age : 23 </li>
//                 <li >Gender : Male </li>
//                 <li> Department : IT</li>
//                 <li> Basic Salary : 100000</li>
//                 <li> Pf : 14000 </li>
//                 <li> Hra : 25000 </li>
//                 <li> TotalSalary : 139000 </li>
                
//             </ul>
//         </li> -->