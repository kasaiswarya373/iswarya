var EDetails = {
    image :
    "https://img.freepik.com/free-photo/confident-cheerful-young-businesswoman_1262-20881.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705449600&semt=sph",
    name : Krishn,
    age : 23,
    gender : male ,
    basicSalary : "45000" ,
    pfPercentage : "12" ,
    hraPencentage : "25" ,
   };

var addEmpDetails = (EDetails) => {
    var mainLiTag = document.createElement("li");
    mainLiTag.setAttribute("class" ,"EDetails");

    var ulTag = document.createElement("ul");

    var imageli = document.createElement("li");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", EDetails.image);
    imageli.append(imgTag);
    ulTag.append(imageli);

    var li1 = document.createElement("li");
    li1.setAttribute("class","name");
    li1.innerText= `Employee Name : $(EDetails.name)`;
    ulTag.append(li1);

    var li2 = document.createElement("li");
    li2.setAttribute("class","age");
    li2.innerText= `Employee Age : $(EDetails.age)`;
    ulTag.append(li2);

    var li3 = document.createElement("li");
    li3.setAttribute("class","gender");
    li3.innerText= `Employee Gender : $(EDetails.gender)`;
    ulTag.append(li3);

    var li4 = document.createElement("li");
    li4.setAttribute("class","basicSalary");
    var basicSalary =parseFloat(EDetails.basicSalary);
    li4.innerText= `Employee basicSalary : $(EDetails.basicSalary)`;
    ulTag.append(li4);

    var li5 = document.createElement("li");
    li5.setAttribute("class","pf");
    var pf= parseFloat(EDetails.pf);
    pf =(EDetails.basicSalary * 12)/100;
    li5.innerText= `Employee Pf : $(EDetails.pf)`;
    ulTag.append(li5);

    var li6 = document.createElement("li");
    li6.setAttribute("class","hra");
    var hra = parseFloat(EDetails.hra);
    hra =(EDetails.basicSalary * 25) /100;
    li6.innerText= `Employee Hra : $(EDetails.hra)`;
    ulTag.append(li6);

    var li7 = document.createElement("li");
    li7.setAttribute("class","total");
    var totalSalary =parseFloat(totalSalary + pf +hra) ;
    var totalTax =(totalSalary * 15)/100;
    li7.innerText= `Total Tax : $(TotalTax)`;
    ulTag.append(li7);

    mainLiTag.append(ulTag);

    document.querySelector(".empDetailsContainer").append(mainLiTag);

};

addEmpDetails(EDetails);

    








 
